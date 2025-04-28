import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-wrap gap-4 mt-[2rem] ml-[2rem]  ">
        <Card className="w-[300px] h-[200px] hover:bg-secondary cursor-pointer transition-all duration-200 ease-in-out">
          <CardHeader>
            <CardTitle>القنون المدني</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">
              <span className="font-bold">User:</span> I like this
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-bold">Assistant:</span> I like this
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
