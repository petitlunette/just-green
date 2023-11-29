'use client'
'use client'
import Head from "next/head";
import { Col, Row } from "reactstrap";
import GanttChart from "@/app/(DashboardLayout)/components/dashboard/SalesChart";
import Feeds from "@/app/(DashboardLayout)/components/dashboard/Feeds";
import ProjectTables from "@/app/(DashboardLayout)/components/dashboard/ProjectTable";
import TopCards from "@/app/(DashboardLayout)/components/dashboard/TopCards";
import Blog from "@/app/(DashboardLayout)/components/dashboard/Blog";
import bg1 from "public/images/bg/bg1.jpg";
import bg2 from "public/images/bg/bg2.jpg";
import bg3 from "public/images/bg/bg3.jpg";
import bg4 from "public/images/bg/bg4.jpg";

const BlogData = [
  {
    image: bg1,
    title: "Home Gardening",
    subtitle: "Subtitle",
    description:
      "Description line.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Seasonal Produce",
    subtitle: "Subtitle",
    description:
      "Description line.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Alternative Protein",
    subtitle: "Subtitle",
    description:
      "Description line.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Pesticides and anti-monoculture",
    subtitle: "Subtitle",
    description:
      "Description line.",
    btnbg: "primary",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Xtreme Starter Next Js App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/***Top Cards***/}
        <Row>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-success text-success"
              title="Profit"
              subtitle="Yearly Earning"
              earning="$21k"
              icon="bi bi-wallet"
            />
          </Col>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-danger text-danger"
              title="Refunds"
              subtitle="Refund given"
              earning="$1k"
              icon="bi bi-coin"
            />
          </Col>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-warning text-warning"
              title="New Project"
              subtitle="Yearly Project"
              earning="456"
              icon="bi bi-basket3"
            />
          </Col>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-info text-into"
              title="Sales"
              subtitle="Weekly Sales"
              earning="210"
              icon="bi bi-bag"
            />
          </Col>
        </Row>
        {/***Sales & Feed***/}
        <Row>
          <Col sm="12" lg="6" xl="7" xxl="8">
            <GanttChart />
          </Col>
          <Col sm="12" lg="6" xl="5" xxl="4">
            <Feeds />
          </Col>
        </Row>
        {/***Table ***/}
        <Row>
          <Col lg="12" sm="12">
            <ProjectTables />
          </Col>
        </Row>
        {/***Blog Cards***/}
        <Row>
          {BlogData.map((blg) => (
            <Col sm="6" lg="6" xl="3" key={blg.title}>
              <Blog
                image={blg.image}
                title={blg.title}
                subtitle={blg.subtitle}
                text={blg.description}
                color={blg.btnbg}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
