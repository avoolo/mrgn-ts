import dynamic from "next/dynamic";
import { PageHeader } from "~/components/common/PageHeader";

const Earn = dynamic(async () => (await import("~/components/desktop/Earn")).Earn, { ssr: false });

const EarnPage = () => {
  return (
    <>
      <PageHeader>earn</PageHeader>
      <Earn />
    </>
  );
};

export default EarnPage;
