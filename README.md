# Primer

**Crypto payments on Amazon that feel as seamless as credit cards!**

Primer is a Chrome extension that lets you pay for Amazon orders with crypto using **Base Pay**. We built an invisible bridge so that users never see the complexity of adding another settlement layer. They just get a smooth checkout experience with USDC on the Base network.

## Features

- **Base Pay Integration** - Seamless USDC payments on Base network
- **Chrome Extension** - Injects crypto checkout buttons on Amazon
- **Gift Card Automation** - Automatic Amazon gift card purchase and order completion
- **Multi-Wallet Support** - Coinbase Wallet, MetaMask, Phantom, and more
- **Real-time Payment Verification** - Coinbase CDP integration for instant confirmation

## How It Works

1. **Browse Amazon** Extension adds a "Checkout with Crypto" button
2. **Click & Connect** Connect your wallet (Coinbase, MetaMask, Phantom)
3. **Pay with USDC** Send payment via Base Pay to our merchant address
4. **We Handle the Rest** Backend buys gift cards and completes your order
5. **Done** You get your Amazon order, we handle the crypto to gift card conversion

## Why This Matters

Amazon doesn't support crypto. We solved this by making gift cards invisible through Base Pay integration. Users get the same checkout experience they're used to, but pay with USDC on the Base network - fast, cheap, and secure.

## Tech Stack

- **Extension**: TypeScript, React, Chrome APIs, Base Pay SDK
- **Webapp**: Next.js, wagmi, CSS Modules, Base Pay integration
- **Backend**: Node.js, Express, SQLite, Coinbase CDP API
- **Blockchain**: Base network, USDC, Coinbase CDP, Base Pay

## Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- Chrome browser for extension testing

### 1. Clone & Install
```bash
# Clone the repository
git clone https://github.com/cynthwangg/primer-with-basepay.git
cd primer-with-basepay

# Install dependencies
pnpm install
```

### 2. Environment Setup
```bash
# Copy environment files (if they exist)
cp .env.example .env

# Set up your Base Pay API keys and Coinbase CDP credentials
# (Check the config files for required environment variables)
```

### 3. Start Development Servers
```bash
# Terminal 1: Start Backend (Port 3001)
cd apps/backend && pnpm dev

# Terminal 2: Start Webapp (Port 3000)  
cd apps/webapp && pnpm dev

# Terminal 3: Build Extension (when needed)
cd apps/extension && pnpm build
```

### 4. Load Chrome Extension
1. Go to `chrome://extensions/`
2. Enable "Developer mode" (top right toggle)
3. Click "Load unpacked" 
4. Select `apps/extension/dist/` folder
5. Extension should appear in your extensions list

### 5. Test the Flow
1. Visit any Amazon product page
2. Look for the "Checkout with Crypto" button
3. Connect your wallet
4. Complete payment with USDC via Base Pay
5. Watch the gift card automation complete your order!

## Project Structure

```
primer-with-basepay/
├── apps/
│   ├── extension/          # Chrome extension with Base Pay
│   ├── webapp/            # Next.js frontend
│   └── backend/           # Express.js API server
├── packages/
│   ├── ui/                # Shared UI components
│   └── utils/             # Common utilities
└── webpack.config.js      # Extension build config
```

## Development Commands

```bash
# Root level
pnpm install              # Install all dependencies
pnpm build               # Build extension
pnpm test                # Run all tests

# Backend
cd apps/backend
pnpm dev                 # Start dev server (port 3001)
pnpm test                # Run backend tests
pnpm build               # Build for production

# Webapp  
cd apps/webapp
pnpm dev                 # Start dev server (port 3000)
pnpm build               # Build for production
pnpm start               # Start production server

# Extension
cd apps/extension  
pnpm build               # Build extension
pnpm watch               # Watch mode for development
```

## API Endpoints

### Backend (localhost:3001)
- `GET /api/health` - Health check
- `POST /api/checkout-sessions` - Create checkout session
- `GET /api/checkout-sessions/:id` - Get session status
- `POST /api/wallet-tracking` - Track wallet connections
- `GET /api/onramp` - Onramp integration endpoints

### Base Pay Integration
- USDC payments on Base network
- Real-time payment verification
- Automatic gift card purchase
- Order completion automation

## Testing

```bash
# Run all tests
pnpm test

# Backend tests
cd apps/backend && pnpm test

# Extension tests  
cd apps/extension && pnpm test

# Webapp tests
cd apps/webapp && pnpm test
```

## Deployment

### Webapp
- **Vercel**: Automatic deployment from main branch
- **Custom**: Build with `pnpm build` and deploy to your hosting

### Backend
- **Local**: `pnpm dev` for development
- **Production**: Build with `pnpm build` and deploy to your server
- **Environment**: Set production environment variables

### Extension
- **Development**: Load unpacked from `apps/extension/dist/`
- **Production**: Submit to Chrome Web Store
- **Build**: Use `pnpm build` to create production bundle

## Configuration

### Base Pay Settings
- Configure Base network RPC endpoints
- Set USDC contract addresses
- Configure merchant wallet addresses

### Coinbase CDP
- API credentials for payment verification
- Webhook endpoints for real-time updates
- Gift card automation settings

### Database
- SQLite for local development
- Configure for production database (PostgreSQL/MySQL)

## Troubleshooting

### Common Issues
1. **Extension not loading**: Check Chrome developer mode and dist folder
2. **Backend not starting**: Verify port 3001 is available
3. **Webapp not loading**: Check port 3000 and Next.js compilation
4. **Base Pay errors**: Verify network configuration and API keys

### Debug Mode
```bash
# Enable verbose logging
DEBUG=* pnpm dev

# Check extension console
# Right-click extension icon → Inspect popup
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Current Status

- **Base Pay Integration** - Working with USDC on Base
- **Chrome Extension** - Built and functional
- **Backend API** - Running with SQLite database
- **Webapp Frontend** - Next.js with wagmi integration
- **Gift Card Automation** - CDP integration working
- **Chrome Web Store** - Ready for submission
- **Production Deployment** - Backend ready for scaling

## What's Next

- Chrome Web Store submission
- Production backend deployment
- Merchant onboarding system
- User testing and feedback collection
- Additional payment methods
- Mobile app development

---

**Built for ETHGlobal NYC with Base Pay integration. Making crypto payments accessible to everyone on the Base network.**