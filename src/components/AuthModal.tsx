import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Github, Chrome, Apple, Eye, EyeOff } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSkip: () => void;
  mode: 'signin' | 'signup';
  onModeChange: (mode: 'signin' | 'signup') => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose, 
  onSkip, 
  mode, 
  onModeChange 
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just skip to the builder
    onSkip();
  };

  const socialProviders = [
    {
      name: 'Google',
      icon: <Chrome className="w-5 h-5" />,
      color: 'bg-red-500 hover:bg-red-600'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      color: 'bg-gray-800 hover:bg-gray-900'
    },
    {
      name: 'Apple',
      icon: <Apple className="w-5 h-5" />,
      color: 'bg-black hover:bg-gray-900'
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md"
          >
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
              <CardHeader className="relative pb-6">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="absolute right-2 top-2 h-8 w-8 p-0 hover:bg-gray-100"
                >
                  <X className="w-4 h-4" />
                </Button>
                
                <div className="text-center">
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {mode === 'signin' ? 'Welcome Back' : 'Create Account'}
                  </CardTitle>
                  <p className="text-gray-600 mt-2">
                    {mode === 'signin' 
                      ? 'Sign in to access your portfolio builder' 
                      : 'Join thousands of professionals building stunning portfolios'
                    }
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Social Login Options */}
                <div className="space-y-3">
                  {socialProviders.map((provider) => (
                    <Button
                      key={provider.name}
                      variant="outline"
                      className="w-full h-12 text-white border-0 shadow-md hover:shadow-lg transition-all duration-200"
                      onClick={onSkip} // For now, just skip to builder
                    >
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full ${provider.color} mr-3`}>
                        {provider.icon}
                      </div>
                      Continue with {provider.name}
                    </Button>
                  ))}
                </div>

                <div className="relative">
                  <Separator />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white px-3 text-sm text-gray-500">or</span>
                  </div>
                </div>

                {/* Email/Password Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {mode === 'signup' && (
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="h-12"
                        required
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="h-12 pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  {mode === 'signup' && (
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="h-12"
                        required
                      />
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    {mode === 'signin' ? 'Sign In' : 'Create Account'}
                  </Button>
                </form>

                {/* Switch Mode */}
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    {mode === 'signin' ? "Don't have an account?" : "Already have an account?"}
                    <Button
                      variant="link"
                      className="p-0 ml-1 h-auto font-semibold text-purple-600 hover:text-purple-700"
                      onClick={() => onModeChange(mode === 'signin' ? 'signup' : 'signin')}
                    >
                      {mode === 'signin' ? 'Sign up' : 'Sign in'}
                    </Button>
                  </p>
                </div>

                {/* Skip Option */}
                <div className="text-center pt-4 border-t">
                  <Button
                    variant="ghost"
                    onClick={onSkip}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    Skip for now and explore
                  </Button>
                </div>

                {/* Terms */}
                {mode === 'signup' && (
                  <p className="text-xs text-gray-500 text-center">
                    By creating an account, you agree to our{' '}
                    <a href="#" className="text-purple-600 hover:underline">Terms of Service</a>
                    {' '}and{' '}
                    <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a>
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;