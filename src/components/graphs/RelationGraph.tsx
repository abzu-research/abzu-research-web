'use client';
import * as d3 from "d3";
import React, { useEffect, useRef } from "react";

type Node = { id: string; label?: string; group?: string };
type Link = { source: string; target: string; weight?: number };
export default function RelationGraph({ nodes, links }: { nodes: Node[]; links: Link[] }){
  const ref = useRef<SVGSVGElement | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();
    const width = 640, height = 400;
    svg.attr("viewBox", `0 0 ${width} ${height}`);

    const sim = d3.forceSimulation<Node>(nodes as any)
      .force("link", d3.forceLink(links as any).id((d:any)=>d.id).distance(120).strength(0.3))
      .force("charge", d3.forceManyBody().strength(-220))
      .force("center", d3.forceCenter(width/2, height/2));

    const link = svg.append("g").attr("stroke","currentColor").attr("stroke-opacity",0.2)
      .selectAll("line").data(links).join("line").attr("stroke-width",(d:any)=>1+(d.weight||0));

    const node = svg.append("g").selectAll("circle").data(nodes).join("circle")
      .attr("r", 6).attr("fill","white").attr("stroke","currentColor").attr("stroke-width",1.2)
      .call(d3.drag<any,any>().on("start",(event:any,d:any)=>{ if(!event.active) sim.alphaTarget(0.3).restart(); d.fx=d.x; d.fy=d.y; })
                              .on("drag",(event:any,d:any)=>{ d.fx=event.x; d.fy=event.y; })
                              .on("end",(event:any,d:any)=>{ if(!event.active) sim.alphaTarget(0); d.fx=null; d.fy=null; }));

    const labels = svg.append("g").selectAll("text").data(nodes).join("text")
      .text(d=>d.label || d.id).attr("font-size",10).attr("opacity",0.8);

    sim.on("tick", ()=>{
      link.attr("x1",(d:any)=>d.source.x).attr("y1",(d:any)=>d.source.y)
          .attr("x2",(d:any)=>d.target.x).attr("y2",(d:any)=>d.target.y);
      node.attr("cx",(d:any)=>d.x).attr("cy",(d:any)=>d.y);
      labels.attr("x",(d:any)=>d.x+8).attr("y",(d:any)=>d.y+4);
    });
    return () => sim.stop();
  }, [nodes, links]);

  return <svg ref={ref} className="w-full h-[400px]" />;
}
