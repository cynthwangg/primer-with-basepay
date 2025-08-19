import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { priceConversionService, PriceData } from '../services/priceConversion';
import { getMerchantAddress } from '../config/merchant';
import CongratulationPage from '../components/CongratulationPage';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [productPrice, setProductPrice] = useState<number>(0.01);
  const [productTitle, setProductTitle] = useState<string>('Amazon Basics 4K Fire TV Stick');
  const [currentTime, setCurrentTime] = useState<string>('');
  
  // Congratulation page state
  const [showCongratulation, setShowCongratulation] = useState(false);
  const [transactionHash, setTransactionHash] = useState<string>('');
  
  // Get Sepolia merchant address from config
  const MERCHANT_ADDRESS = getMerchantAddress();

  useEffect(() => {
    // Get price and title from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const price = urlParams.get('price');
    const title = urlParams.get('title');
    
    if (price) {
      const priceNum = parseFloat(price);
      setProductPrice(priceNum);
    }
    
    if (title) {
      setProductTitle(decodeURIComponent(title));
    }

    // Update time every second
    const timeInterval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true 
      }));
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  const handleBasePayCheckout = () => {
    console.log('Base Pay checkout initiated');
    
    // For now, simulate a successful payment
    // In the future, this would redirect to Base Pay or open Base Pay modal
    const mockTxHash = '0x' + Math.random().toString(36).substr(2, 64);
    setTransactionHash(mockTxHash);
    setShowCongratulation(true);
  };

  const handleShowCongratulation = (txHash: string) => {
    setTransactionHash(txHash);
    setShowCongratulation(true);
  };

  const handleRedirectNow = () => {
    // Redirect back to Amazon or close the window
    window.close();
    // Fallback: redirect to Amazon homepage
    window.location.href = 'https://www.amazon.com';
  };

  // Format receiver address with ellipses
  const formatReceiverAddress = (address: string) => {
    if (address.length <= 12) return address;
    return `${address.slice(0, 6)}...${address.slice(-6)}`;
  };

  // Format product name with ellipses like popup
  const formatProductName = (title: string) => {
    return title.length > 15 ? title.substring(0, 15) + '...' : title;
  };

  // Show congratulation page if transaction was successful
  if (showCongratulation) {
    return (
      <CongratulationPage
        senderAddress="Base Pay User"
        receiverAddress={MERCHANT_ADDRESS}
        transactionHash={transactionHash}
        onRedirectNow={handleRedirectNow}
      />
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Base Pay - Crypto Checkout</title>
        <meta
          content="Checkout with Base Pay"
          name="description"
        />
      </Head>

      <main className={styles.main}>
        {/* Main Container - Fixed size like popup */}
        <div className={styles.mainContainer}>
          {/* Header Section - Exactly like popup */}
          <div className={styles.header}>
            <div className={styles.logoContainer}>
              <img src="/icons/BASE.PayLogo.svg" alt="Base Pay Logo" className={styles.logo} />
            </div>
            <div className={styles.headerTitle}>Base Pay Checkout</div>
          </div>

          {/* Items Breakdown Section - Exactly like popup */}
          <div className={styles.itemsBreakdown}>
            <h2 className={styles.sectionTitle}>Items Breakdown:</h2>
            
            <div className={styles.itemRow}>
              <span className={styles.itemLabel}>{formatProductName(productTitle)}</span>
              <span className={styles.itemValue}>x1</span>
            </div>
            
            <div className={styles.itemRow}>
              <span className={styles.itemLabel}>
                Estimated Gas Fee: 
                <span className={styles.infoIcon}>
                  <img src="/icons/info.svg" alt="Info" />
                </span>
              </span>
              <span className={styles.itemValue}>$0.01</span>
            </div>
            
            <div className={styles.divider}></div>
            
            <div className={styles.itemRow}>
              <span className={styles.itemLabel}>Total:</span>
              <span className={styles.itemValue}>0.01 USDC ($0.01)</span>
            </div>
            
            <div className={styles.itemRow}>
              <span className={styles.itemLabel}>Estimated Transaction Time:</span>
              <span className={styles.itemValue}>
                <img src="/icons/time.svg" alt="Time" className={styles.timeIcon} />
                &lt;1m
              </span>
            </div>
          </div>

          {/* Combined Information Container */}
          <div className={styles.infoContainer}>
            {/* Transaction Information Section */}
            <div className={styles.section}>
              <h3 className={styles.sectionSubtitle}>Transaction Information</h3>
              
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Payment Method:</span>
                <span className={styles.infoValue}>Base Pay</span>
              </div>
              
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Amazon Receiver Address:</span>
                <div className={styles.addressWithIcon}>
                  <span className={styles.externalLink}>
                    <img src="/icons/opennewwindow.svg" alt="External Link" />
                  </span>
                  <span className={styles.infoValue}>{formatReceiverAddress(MERCHANT_ADDRESS)}</span>
                </div>
              </div>
            </div>

            {/* Separator Line */}
            <div className={styles.sectionSeparator}></div>

            {/* Price Information Section */}
            <div className={styles.section}>
              <h3 className={styles.sectionSubtitle}>Price Information</h3>
              
              <div className={styles.timestampInfo}>
                Last updated: {currentTime}
              </div>
              
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Amazon Listing Price:</span>
                <span className={styles.infoValue}>${productPrice.toFixed(2)} USD</span>
              </div>
              
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Amount due in crypto:</span>
                <span className={styles.infoValue}>0.01 USDC ($0.01)</span>
              </div>
            </div>

            {/* Separator Line */}
            <div className={styles.sectionSeparator}></div>

            {/* Blockchain Information Section */}
            <div className={styles.section}>
              <h3 className={styles.sectionSubtitle}>Blockchain Information</h3>
              
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Chain:</span>
                <span className={styles.infoValue}>Base</span>
              </div>
              
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Token:</span>
                <span className={styles.infoValue}>Ethereum (ETH)</span>
              </div>
            </div>
          </div>

          {/* Base Pay Info Footer */}
          <div className={styles.connectionInfo}>
            <span className={styles.connectionLabel}>Powered by: </span>
            <span className={styles.connectionValue}>Base Pay</span>
            <span className={styles.coinbaseIcon}>
              <img src="/icons/BASE.PayLogo.svg" alt="Base Pay" style={{ width: '20px', height: '20px' }} />
            </span>
          </div>
          
          {/* Base Pay Button - Always show at bottom center */}
          <div className={styles.paymentButtonContainer}>
            <div className={styles.buttonContainer}>
              <button 
                onClick={handleBasePayCheckout}
                className={styles.connectWalletButton}
                style={{
                  backgroundColor: '#0000FF',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '16px 24px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  width: '100%',
                  transition: 'all 0.3s ease',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0000CC';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0000FF';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                }}
              >
                Checkout with Base Pay
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
