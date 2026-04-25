import { useEffect, useState } from "react";
import { Mail, User, Calendar, ChevronDown, ChevronUp, Loader2, AlertCircle, RefreshCw } from "lucide-react";
import api from '@/src/components/api/client';

interface Recommendation {
  id: number;
  input_data: string;
  recommendation_result: string;
  created_at: string;
}

function parseInputData(raw: string): Record<string, string> {
  const tokens = raw.trim().split(/\s+/);
  const map: Record<string, string> = {};
  for (let i = 0; i < tokens.length - 1; i += 2) {
    map[tokens[i]] = tokens[i + 1];
  }
  return map;
}

function parseRecommendationResult(raw: string): string {
  let cleaned = raw.trim();
  if (cleaned.startsWith('"') && cleaned.endsWith('"')) {
    cleaned = cleaned.slice(1, -1);
  }
  return cleaned.replace(/\\n/g, "\n");
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleString("en-US", {
    year: "numeric", month: "short", day: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}

const Badge = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-0.5 bg-slate-800 rounded-lg px-3 py-2 min-w-[90px]">
    <span className="text-slate-400 text-[10px] uppercase tracking-wider">{label}</span>
    <span className="text-white text-xs font-semibold truncate">{value}</span>
  </div>
);

const ProfileChips = ({ inputData }: { inputData: string }) => {
  const map = parseInputData(inputData);
  const highlighted = [
    { label: "Credit Score", key: "CreditScore" },
    { label: "Age", key: "Age" },
    { label: "Tenure", key: "Tenure" },
    { label: "Balance", key: "Balance" },
    { label: "Salary", key: "EstimatedSalary" },
    { label: "Card", key: "CardType" },
    { label: "Points", key: "PointsEarned" },
  ];
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {highlighted.map(({ label, key }) =>
        map[key] ? <Badge key={key} label={label} value={map[key]} /> : null
      )}
    </div>
  );
};

const RecommendationCard = ({ rec }: { rec: Recommendation }) => {
  const [expanded, setExpanded] = useState(false);
  const emailText = parseRecommendationResult(rec.recommendation_result);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-200">
      <div className="flex items-start justify-between gap-4 p-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
            <User className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">Recommendation #{rec.id}</p>
            <div className="flex items-center gap-1 mt-0.5 text-slate-400 text-xs">
              <Calendar className="w-3 h-3" />
              {formatDate(rec.created_at)}
            </div>
          </div>
        </div>
        <button
          onClick={() => setExpanded((p) => !p)}
          className="flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 bg-emerald-400/10 hover:bg-emerald-400/20 px-3 py-1.5 rounded-lg transition-all shrink-0"
        >
          <Mail className="w-3.5 h-3.5" />
          {expanded ? "Hide Email" : "View Email"}
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      <div className="px-5 pb-4">
        <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Customer Profile</p>
        <ProfileChips inputData={rec.input_data} />
      </div>

      {expanded && (
        <div className="border-t border-slate-800 mx-5 mb-5 pt-4">
          <p className="text-slate-400 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5" />
            Generated Email
          </p>
          <pre className="whitespace-pre-wrap text-emerald-300 font-mono text-sm leading-relaxed bg-slate-800/50 rounded-xl p-4 max-h-[400px] overflow-auto">
            {emailText}
          </pre>
        </div>
      )}
    </div>
  );
};

export const AllRecommendationViewer = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRecommendations = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get("/api/email_recommendation");
      const data: Recommendation[] = res.data;
      setRecommendations(data.sort((a, b) => b.id - a.id));
    } catch (err: any) {
      setError(err.response?.data?.detail ?? err.message ?? "Failed to fetch recommendations.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchRecommendations(); }, []);

  return (
    <section className="flex flex-col gap-6 w-full max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Mail className="w-6 h-6 text-emerald-400" />
            All Recommendations
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            {recommendations.length} recommendation{recommendations.length !== 1 ? "s" : ""} generated
          </p>
        </div>
        <button
          onClick={fetchRecommendations}
          disabled={loading}
          className="flex items-center gap-2 text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-xl transition-all active:scale-95 disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </button>
      </div>

      {loading && (
        <div className="flex flex-col items-center justify-center gap-3 py-20 text-slate-400">
          <Loader2 className="w-8 h-8 animate-spin text-emerald-400" />
          <p className="text-sm">Loading recommendations...</p>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-5 py-4 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          {error}
        </div>
      )}

      {!loading && !error && recommendations.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-2 py-20 text-slate-500">
          <Mail className="w-10 h-10" />
          <p className="text-sm">No recommendations found.</p>
        </div>
      )}

      {!loading && !error && recommendations.length > 0 && (
        <div className="flex flex-col gap-4">
          {recommendations.map((rec) => (
            <RecommendationCard key={rec.id} rec={rec} />
          ))}
        </div>
      )}
    </section>
  );
};

export default AllRecommendationViewer;