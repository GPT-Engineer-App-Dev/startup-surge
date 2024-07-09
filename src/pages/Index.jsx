import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="flex justify-between items-center p-4 bg-white shadow-sm">
        <div className="text-2xl font-bold">Logo</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav>
        <Button>Get Started</Button>
      </header>

      {/* Hero Section */}
      <section className="flex-grow flex flex-col items-center justify-center text-center p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to Our SaaS Platform</h1>
        <p className="text-xl text-white mb-8">Revolutionize your workflow with our cutting-edge solution</p>
        <div className="space-x-4">
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">Try for Free</Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">Learn More</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Easy Integration", description: "Seamlessly integrate with your existing tools" },
            { title: "Real-time Analytics", description: "Get insights instantly with our powerful analytics" },
            { title: "24/7 Support", description: "Our team is always here to help you succeed" }
          ].map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="space-x-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300"><Twitter size={24} /></a>
            <a href="#" className="hover:text-gray-300"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-gray-300"><Facebook size={24} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;