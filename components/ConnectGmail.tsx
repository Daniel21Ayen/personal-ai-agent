"use client";

<<<<<<< HEAD
import { useState } from "react";
import { Mail, Loader2, Check, X, RefreshCw } from "lucide-react";
import Link from "next/link";

interface ConnectGmailProps {
  isConnected?: boolean;
  onConnect?: () => void;
  onDisconnect?: () => void;
}

export default function ConnectGmail({ isConnected = false, onConnect, onDisconnect }: ConnectGmailProps) {
  const [loading, setLoading] = useState(false);

  const handleConnect = async () => {
    setLoading(true);
    try {
      // Open Gmail OAuth flow
      window.location.href = '/api/auth/gmail';
    } catch (error) {
      console.error("Failed to connect Gmail:", error);
      setLoading(false);
    }
  };

  const handleDisconnect = async () => {
    try {
      if (onDisconnect) onDisconnect();
    } catch (error) {
      console.error("Failed to disconnect Gmail:", error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${isConnected ? 'bg-green-100' : 'bg-gray-100'}`}>
            <Mail className={`w-5 h-5 ${isConnected ? 'text-green-600' : 'text-gray-600'}`} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Gmail</h3>
            <p className="text-sm text-gray-500">
              {isConnected ? "Connected" : "Connect Gmail account"}
            </p>
          </div>
        </div>
        {isConnected ? (
          <button
            onClick={handleDisconnect}
            className="p-1 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        ) : (
          <button
            onClick={handleConnect}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-70"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Mail className="w-4 h-4" />
            )}
            {loading ? "Connecting..." : "Connect"}
          </button>
        )}
      </div>

      {isConnected && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-2 text-sm text-green-700">
            <RefreshCw className="w-3 h-3" />
            <span>Gmail is connected and syncing</span>
          </div>
          <Link
            href="/dashboard/gmail"
            className="mt-2 text-sm text-blue-600 hover:text-blue-700 font-medium inline-block"
          >
            Open Inbox →
          </Link>
        </div>
      )}
    </div>
=======
export default function ConnectGmail() {
  const handleConnect = () => {
    // Placeholder for future Gmail connection logic
    alert("Gmail connection will be implemented in Phase 3!");
  };

  return (
    <button
      onClick={handleConnect}
      className="w-full flex items-center justify-between p-4 rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all"
    >
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-gray-100">
          <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </div>
        <div className="text-left">
          <p className="font-medium text-gray-900">Gmail</p>
          <p className="text-sm text-gray-500">Connect your Gmail account</p>
        </div>
      </div>
      <span className="text-sm font-medium text-blue-600">Connect</span>
    </button>
>>>>>>> feature/final-polish
  );
}