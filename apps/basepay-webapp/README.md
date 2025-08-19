# Base Pay Webapp

This is a duplicate of the main webapp, modified to work with Base Pay instead of wallet connection.

## 🚀 **Deployment to Vercel**

### **Option 1: Deploy via Vercel CLI**

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Navigate to the basepay-webapp directory**:
   ```bash
   cd apps/basepay-webapp
   ```

3. **Deploy to Vercel**:
   ```bash
   vercel --prod
   ```

4. **Follow the prompts**:
   - Link to existing project or create new
   - Set project name (e.g., "basepay-webapp")
   - Confirm deployment

### **Option 2: Deploy via GitHub Integration**

1. **Push this directory to a GitHub repository**
2. **Connect the repository to Vercel**
3. **Vercel will automatically deploy on push**

### **Option 3: Deploy via Vercel Dashboard**

1. **Go to [vercel.com](https://vercel.com)**
2. **Click "New Project"**
3. **Import your GitHub repository**
4. **Set build settings**:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

## 🔧 **Configuration**

The webapp is configured to:
- **Title**: "Base Pay - Crypto Checkout"
- **Logo**: Base Pay logo instead of Amazon logo
- **Button**: Blue Base Pay button (#0000FF) instead of wallet connection
- **Functionality**: Simulates Base Pay checkout (ready for future Base Pay SDK integration)

## 📱 **URL Structure**

The webapp accepts URL parameters:
- `?price=0.01` - Product price
- `?title=Product%20Name` - Product title (URL encoded)

Example: `https://basepay-webapp.vercel.app?price=0.01&title=Amazon%20Fire%20TV%20Stick`

## 🔗 **Extension Integration**

The Chrome extension redirects to this webapp when the Base Pay button is clicked, passing product information via URL parameters.

## 🎨 **Design Changes**

- **Header**: Changed from "Crypto Checkout" to "Base Pay Checkout"
- **Logo**: Base Pay logo instead of Amazon logo
- **Button**: Blue Base Pay button with hover effects
- **Payment Method**: Shows "Base Pay" instead of wallet address
- **Footer**: "Powered by: Base Pay" instead of wallet connection info

## 🚀 **Future Enhancements**

- Integrate with actual Base Pay SDK
- Add real payment processing
- Implement transaction verification
- Add user authentication flow
