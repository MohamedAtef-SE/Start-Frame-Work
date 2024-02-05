import { Component } from "react";



export default class Portfolio extends Component {

    state = {
        allProjects: [
            {
                idPro: 1,
                projectName: 'Database Management System and Business Intelligence Cycle Project',
                bullet_1: 'Tools and Skills: Microsoft SQL Server,ERD , Mapping, SSMS, SSIS, SSAS, SQL Server Reporting Services.',
                bullet_2: 'Engineered normalized OLTP database with SSMS, crafting ERD and conducting mapping for optimal efficiency.',
                bullet_3: 'Orchestrated OLAP Data Warehouse/Mart, leveraging the historical data; employed SSIS for robust ETL processes',
                bullet_4: 'Executed SSAS for multidimensional data modeling and Cube design, delivering insightful report sheets with SSRS.',
            },
            {
                idPro: 2,
                projectName: 'Stores and Regions Sales Analysis',
                bullet_1: 'Tools and Skills: Microsoft SQL Server, Excel, SSMS, SSIS, ETL, Data Engineering, Power BI.',
                bullet_2: 'Spearheaded robust data modeling, transforming raw data into Star Schema with powerful DAX functions for deep insights.',
                bullet_3: 'Engineered Data Mart tables and systematically applied constraints using SSMS, optimizing data organization and integrity.',
                bullet_4: 'Orchestrated seamless data integration through SSIS ETL pipelines and crafted interactive reports in Power BI.',
            },
            {
                idPro: 3,
                projectName: 'ETL for Telecom Company',
                bullet_1: 'Tools and Skills: Microsoft SQL Server, SSMS, SSIS, ETL, Pipelines, Problem-Solving.',
                bullet_2: 'Automated periodic CSV saving, processing customer transactions every 5 minutes for real-time data updates.',
                bullet_3: 'Implemented accurate error handling, identifying, and storing rejected records with original file references.',
                bullet_4: 'Enhanced data registration, ensuring quality by recording transaction details and linking stored data with files.',
            },
            {
                idPro: 4,
                projectName: 'Sales Data Mart',
                bullet_1: 'Tools and Skills: Microsoft SQL Server, ERD, Mapping, SSMS, SSIS, ETL, Data Engineering.',
                bullet_2: 'Engineered Sales Data Mart, optimizing data management with a comprehensive Star Schema.',
                bullet_3: 'Utilized SSIS for efficient ETL processes, implementing incremental loading.',
                bullet_4: 'Enhanced performance through SQL Server optimization, indexing, and designed for scalability.',
            },
            {
                idPro: 5,
                projectName: 'Web Scraping, with Python',
                bullet_1: 'Tools and Skills: Beautiful Soup, Requests, Selenium.',
                bullet_2: 'Scraped over 100 pages from Wuzzuf website and stored the scraped data in CSV file format.',
            },
        ],
        overLayBox: <>
            <div className="box position-relative bg-white rounded-3 p-5 bg-opacity-75">
                <i onClick={this.closeOverLay} className="fa-solid fa-xmark fa-2x position-absolute  top-0 end-0 m-4 text-danger"></i>
                <h2>Project Name</h2>
                <ul>
                    <li className="fs-5 mb-2">Line 01</li>
                    <li className="fs-5 mb-2">Line 02</li>
                    <li className="fs-5 mb-2">Line 03</li>
                    <li className="fs-5 mb-2">Line 04</li>
                </ul>
            </div>
        </>,

    }

    displayOverLay = (project) => {
        const displayMe =

            <div className="box position-relative bg-white rounded-3 p-5 bg-opacity-75">
                <i onClick={this.closeOverLay} className="fa-solid fa-xmark fa-2x position-absolute  top-0 end-0 m-4 text-danger"></i>
                <h2>{project.projectName}</h2>
                <ul>
                    {project.bullet_1 ? <li className="fs-5 mb-2"> {project.bullet_1} </li> : ''}
                    {project.bullet_2 ? <li className="fs-5 mb-2"> {project.bullet_2} </li> : ''}
                    {project.bullet_3 ? <li className="fs-5 mb-2"> {project.bullet_3} </li> : ''}
                    {project.bullet_4 ? <li className="fs-5 mb-2"> {project.bullet_4} </li> : ''}
                </ul>
            </div>;

        this.setState({ overLayBox: displayMe });
        document.querySelector('.present').classList.remove('d-none');
    }
    closeOverLay() {
        document.querySelector('.present').classList.add('d-none');
    }

    componentDidMount() {
        const projectCard = document.querySelectorAll('.proCard');
        projectCard.forEach((proCard) => {
            const tempArr = JSON.parse(JSON.stringify(this.state.allProjects));
            const displayThisProject = tempArr.find((project) => { return project.idPro == proCard.getAttribute('id') });
            proCard.addEventListener('click', () => {
                this.displayOverLay(displayThisProject);
            })
        })
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('present')) {
                this.closeOverLay();
            }
        })
    }

    render() {
        return (
            <>
                <div className="port py-5 bg-main d-flex min-vh-custom flex-column position-relative align-items-center justify-content-center">
                    <h1 className='text-white pb-4 px-5 border-bottom border-5 position-relative fw-bolder mb-5'>PROJECTS</h1>
                    <div className="container">
                        <div className="row g-4 justify-content-evenly">
                            <div id="1" className="proCard col-lg-4 col-md-6">
                                <div className="box overflow-hidden position-relative rounded">
                                    <img className="w-100 rounded" src={require('../../Images/1.jpg')} alt="Data analyst project" />
                                    <div className="overlayBox d-flex flex-column align-items-center justify-content-center">
                                        <h4 className="p-4 text-white">Database Management System and Business Intelligence Cycle Project</h4>
                                        <i className="fa-solid fa-circle-plus fa-2x"></i>
                                    </div>

                                </div>
                            </div>
                            <div id="2" className="proCard col-lg-4 col-md-6">
                                <div className="box overflow-hidden position-relative rounded">
                                    <img className="w-100 rounded" src={require('../../Images/2.jpg')} alt="Data analyst project" />
                                    <div className="overlayBox flex-column d-flex align-items-center justify-content-center">
                                        <h4 className="p-4 text-white">Stores and Regions Sales Analysis</h4>
                                        <i className="fa-solid fa-circle-plus fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                            <div id="3" className="proCard col-lg-4 col-md-6">
                                <div className="box overflow-hidden position-relative rounded">
                                    <img className="w-100 rounded" src={require('../../Images/1.jpg')} alt="Data analyst project" />
                                    <div className="overlayBox flex-column d-flex align-items-center justify-content-center">
                                        <h4 className="p-4 text-white">ETL for Telecom Company</h4>
                                        <i className="fa-solid fa-circle-plus fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                            <div id="4" className="proCard col-lg-4 col-md-6">
                                <div className="box overflow-hidden position-relative rounded">
                                    <img className="w-100 rounded" src={require('../../Images/4.jpg')} alt="Data analyst project" />
                                    <div className="overlayBox flex-column d-flex align-items-center justify-content-center">
                                        <h4 className="p-4 text-white">Sales Data Mart</h4>
                                        <i className="fa-solid fa-circle-plus fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                            <div id="5" className="proCard col-lg-4 col-md-6">
                                <div className="box overflow-hidden position-relative rounded">
                                    <img className="w-100 rounded" src={require('../../Images/5.jpg')} alt="Data analyst project" />
                                    <div className="overlayBox d-flex flex-column align-items-center justify-content-center">
                                        <h4 className="p-4 text-white">Web Scraping, <span className="fw-light">with Python</span></h4>
                                        <i className="fa-solid fa-circle-plus fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="present d-none position-absolute top-0 start-0 end-0 bottom-0 d-flex flex-column justify-content-center align-items-center bg-info bg-opacity-50 z-3">
                            {this.state.overLayBox}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}