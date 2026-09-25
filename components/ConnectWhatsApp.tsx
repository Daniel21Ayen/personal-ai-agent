"use client";

<<<<<<< HEAD
import { useState, useEffect, useRef } from "react";
import { MessageSquare, Loader2, Check, X, QrCode, RefreshCw } from "lucide-react";

interface ConnectWhatsAppProps {
  isConnected?: boolean;
  onConnect?: () => void;
  onDisconnect?: () => void;
}

export default function ConnectWhatsApp({ isConnected = false, onConnect, onDisconnect }: ConnectWhatsAppProps) {
  const [loading, setLoading] = useState(false);
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'connecting' | 'connected' | 'error'>('idle');
  const statusRef = useRef<'idle' | 'connecting' | 'connected' | 'error'>('idle');

  // Use ref to track if component is mounted
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  // Fix: Use useEffect with a ref to avoid state updates during render
  useEffect(() => {
    if (isConnected && statusRef.current !== 'connected') {
      // Use a timeout to avoid setState during render
      const timer = setTimeout(() => {
        if (isMounted.current) {
          setStatus('connected');
          statusRef.current = 'connected';
        }
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isConnected]);

  const handleConnect = async () => {
    setLoading(true);
    setStatus('connecting');
    statusRef.current = 'connecting';
    
    try {
      const response = await fetch("/api/whatsapp/connect", {
        method: "POST",
      });
      const data = await response.json();
      
      if (data.qr) {
        setQrCode(data.qr);
        if (onConnect) onConnect();
      } else if (data.status === 'connected') {
        setStatus('connected');
        statusRef.current = 'connected';
        if (onConnect) onConnect();
      }
    } catch (error) {
      console.error("Failed to connect WhatsApp:", error);
      setStatus('error');
      statusRef.current = 'error';
    } finally {
      setLoading(false);
    }
  };

  const handleDisconnect = async () => {
    try {
      await fetch("/api/whatsapp/connect", {
        method: "DELETE",
      });
      setQrCode(null);
      setStatus('idle');
      statusRef.current = 'idle';
      if (onDisconnect) onDisconnect();
    } catch (error) {
      console.error("Failed to disconnect WhatsApp:", error);
    }
  };

  const checkStatus = async () => {
    try {
      const response = await fetch("/api/whatsapp/connect");
      const data = await response.json();
      
      if (data.connected && data.status === 'connected' && statusRef.current !== 'connected') {
        if (isMounted.current) {
          setStatus('connected');
          statusRef.current = 'connected';
          setQrCode(null);
          if (onConnect) onConnect();
        }
      }
    } catch (error) {
      console.error("Failed to check status:", error);
    }
  };

  // Fix: Use a ref to track polling interval
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (status === 'connecting' && !intervalRef.current) {
      intervalRef.current = setInterval(checkStatus, 3000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [status]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${status === 'connected' ? 'bg-green-100' : 'bg-gray-100'}`}>
            <MessageSquare className={`w-5 h-5 ${status === 'connected' ? 'text-green-600' : 'text-gray-600'}`} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">WhatsApp</h3>
            <p className="text-sm text-gray-500">
              {status === 'connected' ? "Connected" : 
               status === 'connecting' ? "Connecting..." :
               status === 'error' ? "Connection failed" :
               "Connect WhatsApp account"}
            </p>
          </div>
        </div>
        {status === 'connected' ? (
          <button
            onClick={handleDisconnect}
            className="p-1 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        ) : (
          <button
            onClick={handleConnect}
            disabled={loading || status === 'connecting'}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors disabled:opacity-70"
          >
            {loading || status === 'connecting' ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <QrCode className="w-4 h-4" />
            )}
            {status === 'connecting' ? "Connecting..." : "Connect"}
          </button>
        )}
      </div>

      {qrCode && status === 'connecting' && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg text-center">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Scan QR Code with WhatsApp
          </p>
          <div className="bg-white p-3 rounded-lg inline-block border border-gray-200">
            <img 
              src={`data:image/png;base64,${qrCode}`}
              alt="WhatsApp QR Code"
              className="w-40 h-40"
            />
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Open WhatsApp → Settings → QR Code → Scan
          </p>
          <button
            onClick={checkStatus}
            className="mt-3 text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1 justify-center"
          >
            <RefreshCw className="w-3 h-3" />
            Check connection status
          </button>
        </div>
      )}

      {status === 'error' && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
          Connection failed. Please try again.
        </div>
      )}
    </div>
=======
export default function ConnectWhatsApp() {
  const handleConnect = () => {
    // Placeholder for future WhatsApp connection logic
    alert("WhatsApp connection will be implemented in Phase 3!");
  };

  return (
    <button
      onClick={handleConnect}
      className="w-full flex items-center justify-between p-4 rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all"
    >
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-gray-100">
          <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
        <div className="text-left">
          <p className="font-medium text-gray-900">WhatsApp</p>
          <p className="text-sm text-gray-500">Connect your WhatsApp account</p>
        </div>
      </div>
      <span className="text-sm font-medium text-blue-600">Connect</span>
    </button>
>>>>>>> feature/final-polish
  );
}