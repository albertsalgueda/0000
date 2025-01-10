import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="text-center py-12">
        <h1 className="text-4xl mb-4">Pricing Plans</h1>
        <p className="text-xl text-gray-600 mb-8">Choose a plan that fits your needs.</p>
      </div>

      <div className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid id-grid-cols-1 md-grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Basic Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">$10/month</p>
                <ul className="list-disc list-inside">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pro Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">$20/month</p>
                <ul className="list-disc list-inside">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                  <li>Feature 4</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Enterprise Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Contact us for pricing</p>
                <ul className="list-disc list-inside">
                  <li>All Pro features</li>
                  <li>Custom integrations</li>
                  <li>Priority support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
