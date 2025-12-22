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
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Email Signups</CardTitle>
            <CardDescription>
              Total signups: {signups.length}
            </CardDescription>
          </div>
          <Button onClick={onExport} variant="outline">
            Export CSV
          </Button>
        </div>
      </CardHeader>
      <CardContent>
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
                <TableCell>{signup.email}</TableCell>
                <TableCell>{signup.first_name || "-"}</TableCell>
                <TableCell>{signup.interest || "-"}</TableCell>
                <TableCell>
                  {new Date(signup.created_at).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

