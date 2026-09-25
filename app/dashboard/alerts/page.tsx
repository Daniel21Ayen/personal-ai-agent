"use client";

import { useUser } from "@/hooks/useUser";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
<<<<<<< HEAD
import { Loader2, Bell, CheckCircle2, Mail, MessageSquare, Calendar } from "lucide-react";

=======
// import { Loader2, Bell, CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import { Loader2, Bell, CheckCircle2, XCircle, AlertCircle, Mail, MessageSquare, Calendar } from "lucide-react";
>>>>>>> feature/final-polish
export default function AlertsPage() {
  const { isLoaded, isSignedIn } = useUser();
  const alerts = useQuery(api.alerts.getAlerts, { limit: 50 });

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <p className="text-gray-600">Please sign in to view your alerts.</p>
        </div>
      </div>
    );
  }

<<<<<<< HEAD
=======
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'email': return <Mail className="w-5 h-5" />;
      case 'whatsapp': return <MessageSquare className="w-5 h-5" />;
      case 'calendar': return <Calendar className="w-5 h-5" />;
      default: return <Bell className="w-5 h-5" />;
    }
  };

>>>>>>> feature/final-polish
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Alerts</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">
            {alerts?.filter(a => !a.isRead).length || 0} unread
          </span>
        </div>
      </div>

      {!alerts || alerts.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-700 mb-2">No Alerts</h3>
<<<<<<< HEAD
          <p className="text-gray-500">You're all caught up! No alerts to display.</p>
=======
          <p className="text-gray-500">
            You're all caught up! No alerts to display.
          </p>
>>>>>>> feature/final-polish
        </div>
      ) : (
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert._id}
<<<<<<< HEAD
              className={`bg-white rounded-xl shadow-sm border p-4 ${
=======
              className={`bg-white rounded-xl shadow-sm border p-4 transition-all ${
>>>>>>> feature/final-polish
                alert.isRead ? 'border-gray-100 opacity-75' : 'border-blue-200'
              }`}
            >
              <div className="flex items-start gap-4">
<<<<<<< HEAD
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900">{alert.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      alert.priority === 'high' ? 'bg-red-100 text-red-700' :
                      alert.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
=======
                <div className="flex-shrink-0">
                  <div className={`p-2 rounded-lg ${getPriorityColor(alert.priority)}`}>
                    {getTypeIcon(alert.type)}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900">{alert.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${getPriorityColor(alert.priority)}`}>
>>>>>>> feature/final-polish
                      {alert.priority}
                    </span>
                    {!alert.isRead && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-600">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mt-1">{alert.message}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-xs text-gray-400">
                      {new Date(alert.createdAt).toLocaleString()}
                    </span>
<<<<<<< HEAD
                    <span className="text-xs text-gray-400">{alert.type}</span>
                  </div>
                </div>
                {!alert.isRead && (
                  <button className="p-1 text-blue-600 hover:text-blue-700">
                    <CheckCircle2 className="w-5 h-5" />
                  </button>
                )}
=======
                    <span className="text-xs text-gray-400">
                      {alert.type}
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  {!alert.isRead && (
                    <button className="p-1 text-blue-600 hover:text-blue-700">
                      <CheckCircle2 className="w-5 h-5" />
                    </button>
                  )}
                </div>
>>>>>>> feature/final-polish
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}