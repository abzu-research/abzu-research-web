import { ImageResponse } from "next/og";
import { getPaper, getClusters } from "../../../../../../lib/content";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function colorForCluster(cluster: string){
  const map: Record<string,string> = {
    "invariant-transport": "rgba(0,255,255,0.14)",
    "typed-effect-safety": "rgba(255,210,0,0.14)",
    "perception-and-policy-search": "rgba(255,0,180,0.14)",
    "elliott-framework": "rgba(120,255,120,0.16)"
  };
  return map[cluster] || "rgba(180,180,200,0.14)";
}

export async function GET(req: Request, { params }: { params: { cluster: string; slug: string } }) {
  const { frontmatter } = getPaper(params.cluster, params.slug);
  const color = colorForCluster(params.cluster);
  return new ImageResponse(
    (
      <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-end",
        background:`radial-gradient(1000px 520px at 70% 30%, ${color}, transparent 60%)`,
        padding:64, color:"#fff", fontSize:48}}>
        <div style={{ fontSize: 26, opacity: 0.7, marginBottom: 8 }}>{frontmatter.cluster}</div>
        <div style={{ fontWeight: 800, letterSpacing: -0.5, lineHeight: 1.1 }}>{frontmatter.title}</div>
      </div>
    ),
    { ...size }
  );
}
