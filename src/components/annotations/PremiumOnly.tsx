import React from "react";
import Admonition from "@theme/Admonition";

type Software = "MythicMobs Premium" | "ModelEngine" | "MythicEnchants";

export type PremiumOnlyProps = {
    software: Software | Software[];
};

function separateSoftware(software: Software | Software[]): string {
    if (Array.isArray(software)) {
        return software.slice(0, -1).join(", ") + " and " + software.slice(-1);
    } else {
        return software;
    }
}

export default function PremiumOnly({ software = "MythicMobs Premium" }: PremiumOnlyProps) {
    return (
        <Admonition type="danger" title="Premium content">
            The things demonstrated in this section is only available if you buy {separateSoftware(software)}.
        </Admonition>
    );
}
