import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing and using pixelBuilders' services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
            <p>
              pixelBuilders provides web development, mobile app development, UI/UX design, and related digital services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Client Responsibilities</h2>
            <p>As a client, you agree to:</p>
            <ul className="list-disc pl-6">
              <li>Provide accurate and complete information</li>
              <li>Respond to requests for information in a timely manner</li>
              <li>Review and approve deliverables within specified timeframes</li>
              <li>Maintain confidentiality of proprietary information</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
            <p>
              All intellectual property rights in the work product created by pixelBuilders shall be assigned to the client upon full payment. However, pixelBuilders retains the right to use the work in its portfolio and for promotional purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
            <p>
              Payment terms will be specified in individual project agreements. Generally, we require:
            </p>
            <ul className="list-disc pl-6">
              <li>50% deposit before project commencement</li>
              <li>25% at project midpoint</li>
              <li>25% upon project completion</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of any proprietary information shared during the course of the project. This obligation survives the termination of the agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p>
              pixelBuilders shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
            <p>
              Either party may terminate the agreement with written notice. Upon termination, the client shall pay for all work completed up to the termination date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
            <p>
              For any questions about these Terms and Conditions, please contact us at:
            </p>
            <p className="mt-2">
              Email: support@pixelbuilders.in<br />
             
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions; 