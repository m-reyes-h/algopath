import React from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import PublicRoute from "./components/PublicRoute";
import MainLayout from "./components/MainLayout";
import Search from "./pages/Search";
import Sort from "./pages/Sort";

// Component ----------------------------------------------------------

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={Search} layout={MainLayout} />
        <PublicRoute exact path="/sort" component={Sort} layout={MainLayout} />
      </Switch>
    </Router>
    // <div
    //   className="container-fluid d0flex min-vh-100"
    //   style={{ paddingTop: "75px", paddingRight: "300px" }}
    // >
    //   <NavSt className="navbar navbar-expand-sm navbar-light bg-white fixed-top">
    //     <div className="container">
    //       <a className="navbar-brand" href="/#">
    //         AlgoPath
    //       </a>

    //       <div className="collapse navbar-collapse">
    //         <ul className="navbar-nav ml-auto">
    //           <li className="nav-item">
    //             <a className="nav-link" href="/#">
    //               Path finder
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="/#">
    //               Sort
    //             </a>
    //           </li>
    //           <li className="nav-item active">
    //             <a className="nav-link" href="/#">
    //               Search
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <OverlayTrigger
    //               placement="bottom"
    //               overlay={<Tooltip>Analyzer</Tooltip>}
    //             >
    //               <a className="nav-link" href="/#">
    //                 <AnalyzeIcon size={24} />
    //               </a>
    //             </OverlayTrigger>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </NavSt>
    //   <main className="container">
    //     <h1 className="h3 font-weight-light my-4">Search</h1>
    //     <Tab.Container id="left-tabs-example" defaultActiveKey="linear">
    //       <NavSubSt variant="pills" className="d-flex flex-row">
    //         <Nav.Item>
    //           <Nav.Link eventKey="linear">Linear Search</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link eventKey="binary">Binary Search</Nav.Link>
    //         </Nav.Item>
    //       </NavSubSt>

    //       <Tab.Content>
    //         <Tab.Pane eventKey="linear">
    //           <LinearSearch />
    //         </Tab.Pane>
    //         <Tab.Pane eventKey="binary">
    //           <p>Md</p>
    //         </Tab.Pane>
    //       </Tab.Content>
    //     </Tab.Container>
    //   </main>
    // </div>
  );
}

export default App;
