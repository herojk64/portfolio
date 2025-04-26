import React from "react";
import DefaultTheme from "@/layouts/DefaultTheme";
import WelcomeHead from "@/meta/WelcomeHead";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <>
      <WelcomeHead title="Privacy Policy" />
      <DefaultTheme>
        <div className="container py-12">
          <Card className="max-w-3xl mx-auto shadow-md">
            <CardContent className="p-6 space-y-6">
              <h1 className="text-3xl font-bold text-primary">Privacy Policy</h1>

              <p className="text-muted-foreground">
                This Privacy Policy describes how we collect, use, and share information when you visit our website{" "}
                <a
                  href="https://amitdhakal2025.com.np"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline hover:text-primary"
                >
                  amitdhakal2025.com.np
                </a>.
              </p>

              <p className="text-muted-foreground">
                We do not collect any personally identifiable information on this website, except for the necessary data shared with third-party services such as Facebook when using social sharing features.
              </p>

              <p className="text-muted-foreground">
                We may use cookies to enhance user experience.
              </p>

              <p className="text-muted-foreground">
                By using our site, you consent to the use of cookies.
              </p>

              <p className="text-muted-foreground">
                For more information or questions about our Privacy Policy, please contact us at{" "}
                <a
                  href="mailto:herojk64@gmail.com"
                  className="font-semibold underline hover:text-primary"
                >
                  herojk64@gmail.com
                </a>.
              </p>
            </CardContent>
          </Card>
        </div>
      </DefaultTheme>
    </>
  );
};

export default PrivacyPolicy;
