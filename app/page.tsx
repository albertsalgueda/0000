import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar } from "@/components/ui/calendar"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      /* Hero Section */
      <div className="text-center py-12">
        <h1 className="text-4xl mb-4">Welcome to Our SaaS Product</h1>
        <p className="text-xl text-gray-60 mb-8">Revolutionize your workflow with our cutting-edge solutions.</p>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">Get Started</Button>
      </div>

      /* Features Section */
      <div className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl mb-8 text-center">Features</h2>
          <div className="grid id-grid-cols-1 md-grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Feature One</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover the power of our first amazing feature.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Feature Two</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Experience seamless integration with our second feature.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Feature Three</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Unlock new possibilities with our third feature.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        /* Testimonials Section */
        <div className="py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl mb-8 text-center">What Our Customers Say</h2>
            <div className="flex justify-center space-x-8">
              <Avatar>
                <AvatarImage src="/avatars/01.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/avatars/02.png" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/avatars/03.png" />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        /* Pricing Section */
        <div className="py-12 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl mb-8 text-center">Pricing</h2>
            <div className="grid id-grid-cols-1 md-grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>$10/month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pro Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>$20/month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Contact us to find out pricing</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        /* FAQ Section */
        <div className="py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div >
                <h3 className="font-semibold">What is your refund policy? </h3>
                <p>We offer a 30-day money-back guarantee.</p>
              </div>
              <div >
                <h3 className="font-semibold">How do I contact support?</h3>
                <p>You can reach us at support@example.com.</p>
              </div>
            </div>
          </div>
        </div>
    </div>

  )
}
