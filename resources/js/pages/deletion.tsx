import DefaultTheme from "@/layouts/DefaultTheme";
import WelcomeHead from "@/meta/WelcomeHead";
import { Card, CardContent } from "@/components/ui/card";

const Deletion = () => {
  return (
    <>
      <WelcomeHead title="Data Deletion Instructions" />
      <DefaultTheme>
        <div className="container py-12">
          <Card className="max-w-3xl mx-auto shadow-md">
            <CardContent className="p-6 space-y-6">
              <h1 className="text-3xl font-bold text-primary">Data Deletion Instructions</h1>

              <p className="text-muted-foreground">
                We do not collect or store any Facebook user data on{" "}
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
                If you wish to request data deletion, please contact us at{" "}
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

export default Deletion;
