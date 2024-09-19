import { ReactNode } from "react";

const ClientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {/* Header */}
      <main>{children}</main>
      {/* Footer */}
    </div>
  );
};

export default ClientLayout;
