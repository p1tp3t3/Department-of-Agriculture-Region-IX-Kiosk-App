import { useEffect, useRef, useState } from "react"
import { Html5QrcodeScanner } from "html5-qrcode"

const QRCode = ({ success, error }) => {
    const scannerRef = useRef(null)

    useEffect(() => {
        const scanner = new Html5QrcodeScanner("qr-reader", {
            fps: 10,
            qrbox: { width: 300, height: 300 }
        });

        scanner.render(
            (decodedText) => {
                success(decodedText);
                scanner.clear()
            },
            (errorMessage) => {
                if (error) error(errorMessage);
            }
        );

        scannerRef.current = scanner;

        return () => {
            scannerRef.current?.clear();
        };
    }, [])

    return <div 
                id="qr-reader" 
                className="h-full w-full"
            ></div>
}
export default QRCode