import React, {Component} from "react";
import NavigationBar from "../commonComponents/NavigationBar";
import "../../assets/siteMapAssets/Styles.css";
export default class SiteMapPage extends Component{
    render() {
        return(
            <div>
                <NavigationBar/>
                <div className="container">
                    <div className="intro" style={{top:'10'}}>


                        <body>
                        <section class="mt-4">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xl-12 mb-4">
                                        <h3 class="text-center" style={{
                                            padding: 65,
                                        }}>Reason Valuations</h3>
                                    </div>
                                    <div class="col-xl-12 mb-3" >
                                        <div class="table-responsive table-bordered">
                                            <table class="table table-bordered table2excel mb-3">
                                                <thead>
                                                <tr>
                                                    <th>No of Perch</th>
                                                    <th>Land Type</th>
                                                    <th>Distance to Town</th>
                                                    <th>Year</th>
                                                    <th>Lane</th>
                                                    <th>Value</th>

                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr class="noExl">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <button class="btn btn-info exportToExcel ml-2 mb-2" type="button"><strong>Fuck</strong></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        </body>



                    </div>
                </div>
            </div>

        );
    }
}

