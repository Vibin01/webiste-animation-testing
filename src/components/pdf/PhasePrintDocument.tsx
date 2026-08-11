import {
  Document,
  Page,
  View,
  Text,
  Image,
} from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";
import { FaInstagram, FaMediumM, FaYoutube } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";

const tw = createTw({});

function MiniScoreCircle({ percentage, color = "#2B9B43" }: any) {
  return (
    <View style={tw("relative w-24 h-24 items-center justify-center")}>
      <View
        style={{
          width: 96,
          height: 96,
          borderRadius: 999,
          backgroundColor: "#ededed",
          position: "absolute",
        }}
      />
      <View
        style={{
          width: 96,
          height: 96,
          borderRadius: 999,
          position: "absolute",
          backgroundColor: color,
          opacity: percentage / 100,
        }}
      />
      <View
        style={{
          width: 68,
          height: 68,
          borderRadius: 999,
          backgroundColor: "#fff",
        }}
      />
      <Text style={{ color, fontSize: 16, fontWeight: 800, position: "absolute" }}>
        {percentage}%
      </Text>
    </View>
  );
}

function getColor(mode: string) {
  if (mode === "Aligned") return "#2B9B43";
  if (mode === "Auto-Aligned") return "#36C354";
  if (mode === "Misaligned") return "#F0431D";
  if (mode === "Unaligned") return "#F9A620";
  return "#0668E1";
}

export default function PhasePrintDocument({ report, user }: any) {
  const { result, content, phaseLabel } = report;
  if (!result) return null;

  const color = getColor(result?.mode);

  return (
    <Document>
      <Page
        size="A4"
        style={tw("p-6 bg-[#FAFDFF] text-[#1B1C17]")}
      >
        {/* HEADER */}
        <View style={tw("flex-row justify-between border-b pb-3 border-[#D1E5FF]")}>
          <View style={tw("flex-row items-center gap-2")}>
            <View
              style={tw("w-8 h-8 bg-[#E6F0FC] items-center justify-center")}
            >
              <Text style={tw("text-[#0668E1] font-bold")}>
                {user?.name?.charAt(0)?.toUpperCase() || "U"}
              </Text>
            </View>

            <View>
              <Text style={tw("text-sm font-bold")}>{user?.name}</Text>
              <Text style={tw("text-xs")}>
                {user?.email || user?.role}
              </Text>
            </View>
          </View>

          <Image
            src="/Connect_EC_Logo.svg"
            style={{ width: 140 }}
          />
        </View>

        {/* TITLE */}
        <View style={tw("mt-6 flex-row items-center gap-2")}>
          <Text>🛡️</Text>
          <View>
            <Text style={tw("text-lg font-bold")}>
              Your Alignment Insight - {phaseLabel}
            </Text>
            <Text style={tw("text-xs")}>
              Based on your response across 3 key situations
            </Text>
          </View>
        </View>

        {/* SCORE */}
        <View style={tw("mt-5 p-4 border border-[#DEEDFF] rounded")}>
          <View style={tw("flex-row items-center gap-6")}>
            <MiniScoreCircle
              percentage={result.percentage}
              color={color}
            />

            <View>
              <Text style={{ fontSize: 28, color, fontWeight: 800 }}>
                {result.percentage}%
              </Text>
              <Text style={{ fontSize: 14, color, fontWeight: 700 }}>
                {result.mode}
              </Text>

              <Text style={tw("text-xs mt-1")}>
                Pattern: {content.patternName[result.band][0]}
              </Text>
            </View>
          </View>
        </View>

        {/* CARDS */}
        <View style={tw("mt-4")}>
          {content.centerCards.map((card: any, i: number) => (
            <View
              key={i}
              style={tw("border p-2 rounded mb-2 border-[#DEEDFF]")}
            >
              <Text style={tw("text-xs font-bold")}>
                {card.title}
              </Text>

              {card.lines.map((line: string, idx: number) => (
                <Text key={idx} style={tw("text-[10px] mt-1")}>
                  {line}
                </Text>
              ))}
            </View>
          ))}
        </View>

        {/* FOOTER */}
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "#0668E1",
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            color: "#fff",
          }}
        >
          <Text>Take Alignment Test</Text>

          <View style={{ flexDirection: "row", gap: 10 }}>
            <Text>in</Text>
            <Text>M</Text>
            <Text>YT</Text>
            <Text>IG</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}