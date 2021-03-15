import React,{Component} from "react";
import {render} from "@testing-library/react";
import '';
render()
    {
    return(
        <div id="wrapper">
            <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
                <div className="container-fluid d-flex flex-column p-0">
                    <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
                    href="#">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"/>
                    </div>
                    <div className="sidebar-brand-text mx-3">
                        <span>
                            Brand
                        </span>
                    </div>
                </a>
                    <h className="sidebar-divider my-0"/>
                        <ul className="navbar-nav text-light"
                            id="accordionSidebar">
                            <li className="nav-item">
                                <a className="nav-link active"
                                   href="index.html">
                                    <i className="fas fa-tachometer-alt"/>
                                    <span>
                                        Dashboard
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"
                                   href="profile.html">
                                    <i className="fas fa-user"/>
                                    <span>
                                        Profile
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"
                                   href="table.html">
                                    <i className="fas fa-table"/>
                                    <span>
                                        Table
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"
                                   href="login.html">
                                    <i className="far fa-user-circle"/>
                                    <span>
                                        Login
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"
                                   href="register.html">
                                    <i className="fas fa-user-circle"/>
                                    <span>
                                        Register
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <div className="text-center d-none d-md-inline">
                            <button className="btn rounded-circle border-0"
                                    id="sidebarToggle"
                                    type="button">
                            </button>
                        </div>
                </div>
            </nav>
            <div className="d-flex flex-column"
                 id="content-wrapper">
                <div id="content">
                    <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                        <div className="container-fluid">
                            <button className="btn btn-link d-md-none rounded-circle mr-3"
                                    id="sidebarToggleTop"
                                    type="button">
                                <i className="fas fa-bars"/>
                            </button>
                            <form className="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group">
                                    <input className="bg-light form-control border-0 small"
                                           type="text"
                                           placeholder="Search for ..."/>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary py-0"
                                                type="button">
                                            <i className="fas fa-search"/>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <ul className="navbar-nav flex-nowrap ml-auto">
                                <li className="nav-item dropdown d-sm-none no-arrow">
                                    <a className="dropdown-toggle nav-link"
                                       aria-expanded="false"
                                       data-toggle="dropdown"
                                       href="#">
                                        <i className="fas fa-search"/>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right p-3 animated--grow-in"
                                         aria-labelledby="searchDropdown">
                                        <form className="form-inline mr-auto navbar-search w-100">
                                            <div className="input-group">
                                                <input className="bg-light form-control border-0 small"
                                                       type="text"
                                                       placeholder="Search for ..."/>
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary py-0"
                                                            type="button">
                                                        <i className="fas fa-search"/>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>
                                <li className="nav-item dropdown no-arrow mx-1">
                                    <div className="nav-item dropdown no-arrow">
                                        <a className="dropdown-toggle nav-link"
                                           aria-expanded="false"
                                           data-toggle="dropdown" href="#">
                                            <span className="badge badge-danger badge-counter">
                                                3+
                                            </span>
                                            <i className="fas fa-bell fa-fw"/>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right dropdown-list animated--grow-in">
                                            <h6 className="dropdown-header">
                                                alerts center
                                            </h6>
                                            <a className="dropdown-item d-flex align-items-center"
                                               href="#">
                                            <div className="mr-3">
                                                <div className="bg-primary icon-circle"><i
                                                    className="fas fa-file-alt text-white"/></div>
                                            </div>
                                            <div><span className="small text-gray-500">December 12, 2019</span>
                                                <p>A new monthly report is ready to download!</p>
                                            </div>
                                        </a><a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="mr-3">
                                                <div className="bg-success icon-circle"><i
                                                    className="fas fa-donate text-white"></i></div>
                                            </div>
                                            <div><span className="small text-gray-500">December 7, 2019</span>
                                                <p>$290.29 has been deposited into your account!</p>
                                            </div>
                                        </a><a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="mr-3">
                                                <div className="bg-warning icon-circle"><i
                                                    className="fas fa-exclamation-triangle text-white"></i></div>
                                            </div>
                                            <div><span className="small text-gray-500">December 2, 2019</span>
                                                <p>Spending Alert: We've noticed unusually high spending for your
                                                    account.</p>
                                            </div>
                                        </a><a className="dropdown-item text-center small text-gray-500" href="#">Show
                                            All Alerts</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown no-arrow mx-1">
                                    <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link"
                                                                                   aria-expanded="false"
                                                                                   data-toggle="dropdown" href="#"><span
                                        className="badge badge-danger badge-counter">7</span><i
                                        className="fas fa-envelope fa-fw"></i></a>
                                        <div
                                            className="dropdown-menu dropdown-menu-right dropdown-list animated--grow-in">
                                            <h6 className="dropdown-header">alerts center</h6><a
                                            className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3"><img className="rounded-circle"
                                                                                           src="assets/img/avatars/avatar4.jpeg">
                                                <div className="bg-success status-indicator"></div>
                                            </div>
                                            <div className="font-weight-bold">
                                                <div className="text-truncate"><span>Hi there! I am wondering if you can help me with a problem I've been having.</span>
                                                </div>
                                                <p className="small text-gray-500 mb-0">Emily Fowler - 58m</p>
                                            </div>
                                        </a><a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3"><img className="rounded-circle"
                                                                                           src="assets/img/avatars/avatar2.jpeg">
                                                <div className="status-indicator"></div>
                                            </div>
                                            <div className="font-weight-bold">
                                                <div className="text-truncate"><span>I have the photos that you ordered last month!</span>
                                                </div>
                                                <p className="small text-gray-500 mb-0">Jae Chun - 1d</p>
                                            </div>
                                        </a><a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3"><img className="rounded-circle"
                                                                                           src="assets/img/avatars/avatar3.jpeg">
                                                <div className="bg-warning status-indicator"></div>
                                            </div>
                                            <div className="font-weight-bold">
                                                <div className="text-truncate"><span>Last month's report looks great, I am very happy with the progress so far, keep up the good work!</span>
                                                </div>
                                                <p className="small text-gray-500 mb-0">Morgan Alvarez - 2d</p>
                                            </div>
                                        </a><a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3"><img className="rounded-circle"
                                                                                           src="assets/img/avatars/avatar5.jpeg">
                                                <div className="bg-success status-indicator"></div>
                                            </div>
                                            <div className="font-weight-bold">
                                                <div className="text-truncate"><span>Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</span>
                                                </div>
                                                <p className="small text-gray-500 mb-0">Chicken the Dog · 2w</p>
                                            </div>
                                        </a><a className="dropdown-item text-center small text-gray-500" href="#">Show
                                            All Alerts</a>
                                        </div>
                                    </div>
                                    <div className="shadow dropdown-list dropdown-menu dropdown-menu-right"
                                         aria-labelledby="alertsDropdown"></div>
                                </li>
                                <div className="d-none d-sm-block topbar-divider"></div>
                                <li className="nav-item dropdown no-arrow">
                                    <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link"
                                                                                   aria-expanded="false"
                                                                                   data-toggle="dropdown" href="#"><span
                                        className="d-none d-lg-inline mr-2 text-gray-600 small">Valerie Luna</span><img
                                        className="border rounded-circle img-profile"
                                        src="assets/img/avatars/avatar1.jpeg"></a>
                                        <div className="dropdown-menu shadow dropdown-menu-right animated--grow-in"><a
                                            className="dropdown-item" href="#"><i
                                            className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Profile</a><a
                                            className="dropdown-item" href="#"><i
                                            className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Settings</a><a
                                            className="dropdown-item" href="#"><i
                                            className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Activity
                                            log</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#"><i
                                                className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Logout</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="container-fluid">
                        <div className="d-sm-flex justify-content-between align-items-center mb-4">
                            <h3 className="text-dark mb-0">Dashboard</h3><a
                            className="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" href="#"><i
                            className="fas fa-download fa-sm text-white-50"></i>&nbsp;Generate Report</a>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-xl-3 mb-4"></div>
                            <div className="col-md-6 col-xl-3 mb-4"></div>
                            <div className="col-md-6 col-xl-3 mb-4"></div>
                            <div className="col-md-6 col-xl-3 mb-4"></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-7 col-xl-8">
                                <div className="card shadow mb-4">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <h6 className="text-primary font-weight-bold m-0">Earnings Overview</h6>
                                        <div className="dropdown no-arrow">
                                            <button className="btn btn-link btn-sm dropdown-toggle"
                                                    aria-expanded="false" data-toggle="dropdown" type="button"><i
                                                className="fas fa-ellipsis-v text-gray-400"></i></button>
                                            <div className="dropdown-menu shadow dropdown-menu-right animated--fade-in">
                                                <p className="text-center dropdown-header">dropdown header:</p><a
                                                className="dropdown-item" href="#">&nbsp;Action</a><a
                                                className="dropdown-item" href="#">&nbsp;Another action</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">&nbsp;Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="chart-area">
                                            <canvas
                                                data-bss-chart="{&quot;type&quot;:&quot;line&quot;,&quot;data&quot;:{&quot;labels&quot;:[&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;],&quot;datasets&quot;:[{&quot;label&quot;:&quot;Earnings&quot;,&quot;fill&quot;:true,&quot;data&quot;:[&quot;0&quot;,&quot;10000&quot;,&quot;5000&quot;,&quot;15000&quot;,&quot;10000&quot;,&quot;20000&quot;,&quot;15000&quot;,&quot;25000&quot;],&quot;backgroundColor&quot;:&quot;rgba(78, 115, 223, 0.05)&quot;,&quot;borderColor&quot;:&quot;rgba(78, 115, 223, 1)&quot;}]},&quot;options&quot;:{&quot;maintainAspectRatio&quot;:false,&quot;legend&quot;:{&quot;display&quot;:false},&quot;title&quot;:{},&quot;scales&quot;:{&quot;xAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;],&quot;drawOnChartArea&quot;:false},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;padding&quot;:20}}],&quot;yAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;]},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;padding&quot;:20}}]}}}"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-xl-4">
                                <div className="card shadow mb-4">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <h6 className="text-primary font-weight-bold m-0">Revenue Sources</h6>
                                        <div className="dropdown no-arrow">
                                            <button className="btn btn-link btn-sm dropdown-toggle"
                                                    aria-expanded="false" data-toggle="dropdown" type="button"><i
                                                className="fas fa-ellipsis-v text-gray-400"></i></button>
                                            <div className="dropdown-menu shadow dropdown-menu-right animated--fade-in">
                                                <p className="text-center dropdown-header">dropdown header:</p><a
                                                className="dropdown-item" href="#">&nbsp;Action</a><a
                                                className="dropdown-item" href="#">&nbsp;Another action</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">&nbsp;Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="chart-area">
                                            <canvas
                                                data-bss-chart="{&quot;type&quot;:&quot;doughnut&quot;,&quot;data&quot;:{&quot;labels&quot;:[&quot;Direct&quot;,&quot;Social&quot;,&quot;Referral&quot;],&quot;datasets&quot;:[{&quot;label&quot;:&quot;&quot;,&quot;backgroundColor&quot;:[&quot;#4e73df&quot;,&quot;#1cc88a&quot;,&quot;#36b9cc&quot;],&quot;borderColor&quot;:[&quot;#ffffff&quot;,&quot;#ffffff&quot;,&quot;#ffffff&quot;],&quot;data&quot;:[&quot;50&quot;,&quot;30&quot;,&quot;15&quot;]}]},&quot;options&quot;:{&quot;maintainAspectRatio&quot;:false,&quot;legend&quot;:{&quot;display&quot;:false},&quot;title&quot;:{}}}"></canvas>
                                        </div>
                                        <div className="text-center small mt-4"><span className="mr-2"><i
                                            className="fas fa-circle text-primary"></i>&nbsp;Direct</span><span
                                            className="mr-2"><i className="fas fa-circle text-success"></i>&nbsp;Social</span><span
                                            className="mr-2"><i
                                            className="fas fa-circle text-info"></i>&nbsp;Refferal</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <h6 className="text-primary font-weight-bold m-0">Projects</h6>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="small font-weight-bold">Server migration<span
                                            className="float-right">20%</span></h4>
                                        <div className="progress mb-4">
                                            <div className="progress-bar bg-danger" aria-valuenow="20" aria-valuemin="0"
                                                 aria-valuemax="100" style="width: 20%;"><span
                                                className="sr-only">20%</span></div>
                                        </div>
                                        <h4 className="small font-weight-bold">Sales tracking<span
                                            className="float-right">40%</span></h4>
                                        <div className="progress mb-4">
                                            <div className="progress-bar bg-warning" aria-valuenow="40"
                                                 aria-valuemin="0" aria-valuemax="100" style="width: 40%;"><span
                                                className="sr-only">40%</span></div>
                                        </div>
                                        <h4 className="small font-weight-bold">Customer Database<span
                                            className="float-right">60%</span></h4>
                                        <div className="progress mb-4">
                                            <div className="progress-bar bg-primary" aria-valuenow="60"
                                                 aria-valuemin="0" aria-valuemax="100" style="width: 60%;"><span
                                                className="sr-only">60%</span></div>
                                        </div>
                                        <h4 className="small font-weight-bold">Payout Details<span
                                            className="float-right">80%</span></h4>
                                        <div className="progress mb-4">
                                            <div className="progress-bar bg-info" aria-valuenow="80" aria-valuemin="0"
                                                 aria-valuemax="100" style="width: 80%;"><span
                                                className="sr-only">80%</span></div>
                                        </div>
                                        <h4 className="small font-weight-bold">Account setup<span
                                            className="float-right">Complete!</span></h4>
                                        <div className="progress mb-4">
                                            <div className="progress-bar bg-success" aria-valuenow="100"
                                                 aria-valuemin="0" aria-valuemax="100" style="width: 100%;"><span
                                                className="sr-only">100%</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <h6 className="text-primary font-weight-bold m-0">Todo List</h6>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <div className="row align-items-center no-gutters">
                                                <div className="col mr-2">
                                                    <h6 className="mb-0"><strong>Lunch meeting</strong></h6><span
                                                    className="text-xs">10:30 AM</span>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="custom-control custom-checkbox"><input
                                                        className="custom-control-input" type="checkbox"
                                                        id="formCheck-1"><label className="custom-control-label"
                                                                                htmlFor="formCheck-1"></label></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="row align-items-center no-gutters">
                                                <div className="col mr-2">
                                                    <h6 className="mb-0"><strong>Lunch meeting</strong></h6><span
                                                    className="text-xs">11:30 AM</span>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="custom-control custom-checkbox"><input
                                                        className="custom-control-input" type="checkbox"
                                                        id="formCheck-2"><label className="custom-control-label"
                                                                                htmlFor="formCheck-2"></label></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="row align-items-center no-gutters">
                                                <div className="col mr-2">
                                                    <h6 className="mb-0"><strong>Lunch meeting</strong></h6><span
                                                    className="text-xs">12:30 AM</span>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="custom-control custom-checkbox"><input
                                                        className="custom-control-input" type="checkbox"
                                                        id="formCheck-3"><label className="custom-control-label"
                                                                                htmlFor="formCheck-3"></label></div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <div className="col-lg-6 mb-4">
                                        <div className="card text-white bg-primary shadow">
                                            <div className="card-body">
                                                <p className="m-0">Primary</p>
                                                <p className="text-white-50 small m-0">#4e73df</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <div className="card text-white bg-success shadow">
                                            <div className="card-body">
                                                <p className="m-0">Success</p>
                                                <p className="text-white-50 small m-0">#1cc88a</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <div className="card text-white bg-info shadow">
                                            <div className="card-body">
                                                <p className="m-0">Info</p>
                                                <p className="text-white-50 small m-0">#36b9cc</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <div className="card text-white bg-warning shadow">
                                            <div className="card-body">
                                                <p className="m-0">Warning</p>
                                                <p className="text-white-50 small m-0">#f6c23e</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <div className="card text-white bg-danger shadow">
                                            <div className="card-body">
                                                <p className="m-0">Danger</p>
                                                <p className="text-white-50 small m-0">#e74a3b</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <div className="card text-white bg-secondary shadow">
                                            <div className="card-body">
                                                <p className="m-0">Secondary</p>
                                                <p className="text-white-50 small m-0">#858796</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="bg-white sticky-footer">
                    <div className="container my-auto">
                        <div className="text-center my-auto copyright"><span>Copyright © Brand 2021</span></div>
                    </div>
                </footer>
            </div>
            <a className="border rounded d-inline scroll-to-top" href="#page-top"><i
                className="fas fa-angle-up"></i></a>
        </div>

    );
}

