import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import ServerProLogo from "../_assets/server_pro_logo.png";
import BlockContainer from "@/components/BlockContainer";

export default function ServerCard() {
  return (
    <BlockContainer>
      <Card className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-[35px] md:w-full p-6 shadow-[2px_6px_4px_0_rgba(0,0,0,0.3)] flex items-center justify-between text-white w-[300px]">
        <div className="p-6 pt-2">
          <CardHeader className="p-0">
            <CardTitle className="text-xl font-semibold">Server.pro</CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-sm">
            <p>
              Some description of the sponsor here. Some description of the
              sponsor here. Some description of the sponsor here. Some
              description of the sponsor here. Some description of the sponsor
              here.
            </p>
          </CardContent>
        </div>
        <div className="ml-4">
          <div className="bg-white p-4 rounded-full">
            <Image
              className="w-10 h-10"
              src={ServerProLogo}
              alt="Server.pro logo"
            />
          </div>
        </div>
      </Card>
    </BlockContainer>
  );
}
