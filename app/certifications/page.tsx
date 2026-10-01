import { currentUser } from "@clerk/nextjs/server";
import { CertificationCard } from "@/components/CertificationCard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  certifications,
  getCertification,
  providers,
} from "@/lib/certifications";

export default async function CertificationsPage() {
  const user = await currentUser();
  const selectedId =
    typeof user?.publicMetadata.certificationId === "string"
      ? user.publicMetadata.certificationId
      : undefined;
  const selectedCertification = getCertification(selectedId);
  const certificationGroups = [
    { value: "all", items: certifications },
    ...providers.map((provider) => ({
      value: provider,
      items: certifications.filter(
        (certification) => certification.provider === provider,
      ),
    })),
  ];

  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Certification catalog</h1>
        <p className="text-lg text-black/70">
          Choose the certification you&apos;re preparing for.
        </p>
      </div>
      {selectedCertification && (
        <p className="text-sm text-muted-foreground">
          Studying for:{" "}
          <strong className="text-foreground">
            {selectedCertification.name}
          </strong>
        </p>
      )}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="all">All</TabsTrigger>
          {providers.map((provider) => (
            <TabsTrigger key={provider} value={provider}>
              {provider}
            </TabsTrigger>
          ))}
        </TabsList>
        {certificationGroups.map((group) => (
          <TabsContent key={group.value} value={group.value} className="mt-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((certification) => (
                <CertificationCard
                  key={certification.id}
                  certification={certification}
                  selected={selectedId === certification.id}
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
