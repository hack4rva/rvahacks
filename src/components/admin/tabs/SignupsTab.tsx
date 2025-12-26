import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Signup {
  id: string;
  email: string;
  first_name?: string;
  interest?: string;
  created_at: string;
}

interface SignupsTabProps {
  signups: Signup[];
  onExport: () => void;
}

export const SignupsTab = ({ signups, onExport }: SignupsTabProps) => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <div>
            <CardTitle className="text-lg sm:text-xl">Email Signups</CardTitle>
            <CardDescription>
              Total signups: {signups.length}
            </CardDescription>
          </div>
          <Button onClick={onExport} variant="outline" size="sm" className="w-full sm:w-auto">
            Export CSV
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Mobile Card View */}
        <div className="block sm:hidden space-y-3">
          {signups.map((signup) => (
            <div key={signup.id} className="border border-border rounded-lg p-3 bg-muted/20">
              <p className="font-medium text-sm text-foreground break-all">{signup.email}</p>
              <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                {signup.first_name && <span>{signup.first_name}</span>}
                {signup.interest && <span>• {signup.interest}</span>}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {new Date(signup.created_at).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden sm:block overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>First Name</TableHead>
                <TableHead>Interest</TableHead>
                <TableHead>Created At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {signups.map((signup) => (
                <TableRow key={signup.id}>
                  <TableCell className="break-all">{signup.email}</TableCell>
                  <TableCell>{signup.first_name || "-"}</TableCell>
                  <TableCell>{signup.interest || "-"}</TableCell>
                  <TableCell>
                    {new Date(signup.created_at).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

