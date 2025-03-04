
import { ArrowRight, Calendar, Globe, Clock, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export function LLCInfoSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-secondary" id="llc-info">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">Government Credentials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our federal contracting qualifications and registrations.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border p-8">
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-in">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-500">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Company Established</h3>
                  <p className="text-muted-foreground">Incorporated on January 15, 2018</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-in animation-delay-100">
                <div className="p-3 rounded-xl bg-green-50 text-green-500">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">SAM.gov Registration</h3>
                  <p className="text-muted-foreground">Active registration since March 10, 2018</p>
                  <p className="text-sm text-muted-foreground mt-1">CAGE Code: 1A2B3</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-in animation-delay-200">
                <div className="p-3 rounded-xl bg-amber-50 text-amber-500">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Security Clearances</h3>
                  <p className="text-muted-foreground">Facility Clearance Level: Secret</p>
                  <p className="text-sm text-muted-foreground mt-1">Personnel with TS/SCI available</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-in animation-delay-300">
                <div className="p-3 rounded-xl bg-purple-50 text-purple-500">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Contract Vehicles</h3>
                  <p className="text-muted-foreground">GSA Schedule Contract Holder</p>
                  <p className="text-sm text-muted-foreground mt-1">IDIQ and BPA access available</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t">
              <Link 
                to="/llc-info" 
                className="inline-flex items-center gap-2 text-primary font-medium"
              >
                View Complete Government Credentials
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
