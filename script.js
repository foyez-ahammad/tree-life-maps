var margin = {
    top: 20,
    right: 120,
    bottom: 20,
    left: 120
},
    width = 960 - margin.right - margin.left,
    height = 800 - margin.top - margin.bottom;

var root = {
    "name": "Life Journey",
    "width": 130,
    "children": [
        {

            "name": "Journey-1",
            "width": 130,
            "children": [
                {
                    "name": "IT Expert",
                    "duration": "Duration: 7 Year",
                    "width": 130,
                    "children": [
                        {
                            "name": "Components",
                            "duration": "Duration: 2 Year",
                            "money": "Money: Free",
                            "width": 130,
                            "children": [
                                { "name": "Programming Language", "width": 130 },
                                { "name": "DSA", "width": 130 },
                                { "name": "Deployement", "width": 130 },
                                { "name": "Database Management", "width": 130 },
                                { "name": "Hardwere & Networking", "width": 130 },
                                { "name": "Operating Systems", "width": 130 },
                                { "name": "Cloud/Server Computing", "width": 130 },
                                { "name": "Environments", "width": 130 },
                            ]

                        },
                        {
                            "name": "Courses",
                            "duration": "Duration: 5 Year",
                            "money": "Money: 50,000 BDT",
                            "width": 120,
                            "children": [
                                {
                                    "name": "Web Development",
                                    "duration": "Duration: 1 Year",
                                    "money": "Money: 20,000 BDT",
                                    "width": 120,
                                    // "children": [
                                    //     {
                                    //         "name": "Basics",
                                    //         "width": 120,
                                    //         "children": [
                                    //             { "name": "Environment", "width": 120 },
                                    //             { "name": "Comment & Slash", "width": 120 },
                                    //             { "name": "Formating", "width": 120 },
                                    //             { "name": "Print & Input", "width": 120 },
                                    //             { "name": "Variable", "width": 120 },
                                    //             { "name": "Data Type", "width": 120 },
                                    //             { "name": "Operators", "width": 120 },
                                    //             { "name": "Control Flow", "width": 120 },
                                    //             { "name": "Function", "width": 120 },
                                    //             { "name": "Module", "width": 120 },
                                    //             { "name": "PIP and PyPi", "width": 120 },
                                    //             { "name": "Keywords", "width": 120 },
                                    //         ]
                                    //     },
                                    //     {
                                    //         "name": "Advanced",
                                    //         "width": 120,
                                    //         "children": [
                                    //             { "name": "OOP", "width": 120 },
                                    //             { "name": "File I/O", "width": 120 },
                                    //             { "name": "Used Module", "width": 120 }
                                    //         ]
                                    //     },
                                    //     {
                                    //         "name": "Mastery",
                                    //         "width": 120,
                                    //         "children": [
                                    //             { "name": "Decorator", "width": 120 },
                                    //             { "name": "Generator", "width": 120 },
                                    //             { "name": "Comprehension", "width": 120 },
                                    //             { "name": "Error Handling", "width": 120 },
                                    //             { "name": "Debuging", "width": 120 },
                                    //             { "name": "Recursion", "width": 120 },
                                    //             { "name": "Testing", "width": 120 },
                                    //             {
                                    //                 "name": "Advanced Function",
                                    //                 "width": 120,
                                    //                 "children": [
                                    //                     { "name": "Lambda", "width": 120 },
                                    //                     { "name": "Map", "width": 120 },
                                    //                     { "name": "Filter", "width": 120 },
                                    //                     { "name": "Reduce", "width": 120 }
                                    //                 ]
                                    //             }
                                    //         ]
                                    //     }
                                    // ]
                                },
                                {
                                    "name": "CSE",
                                    "duration": "Duration: 1 Year",
                                    "money": "Money: 10,000 BDT",
                                    "width": 120,
                                    // "children": [
                                    //     { "name": "Git", "width": 120 },
                                    //     { "name": "GitHub", "width": 120 },
                                    //     { "name": "Heroku", "width": 120 },
                                    //     { "name": "Docker", "width": 120 }
                                    // ]
                                },
                                {
                                    "name": "Cyber Security",
                                    "duration": "Duration: 2 Year",
                                    "money": "Money: 20,000 BDT",
                                    "width": 120,
                                    // "children": [
                                    //     {
                                    //         "name": "SQL",
                                    //         "width": 120,
                                    //         "children": [
                                    //             {
                                    //                 "name": "MySQL",
                                    //                 "width": 120,
                                    //                 "children": [
                                    //                     {
                                    //                         "name": "DDL",
                                    //                         "width": 120,
                                    //                         "children": [
                                    //                             { "name": "CREATE", "width": 120 },
                                    //                             { "name": "ALTER", "width": 120 },
                                    //                             { "name": "DROP", "width": 120 },
                                    //                             { "name": "RENAME", "width": 120 },
                                    //                             { "name": "TRUNCATE", "width": 120 },
                                    //                         ]
                                    //                     },
                                    //                     {
                                    //                         "name": "DML",
                                    //                         "width": 120,
                                    //                         "children": [
                                    //                             { "name": "SELECT.. FROM..", "width": 150 },
                                    //                             { "name": "INSERT INTO.. VALUES", "width": 150 },
                                    //                             { "name": "UPDATE.. SET.. WHERE", "width": 150 },
                                    //                             { "name": "DELETE.. FROM.. WHERE", "width": 150 },
                                    //                         ]
                                    //                     },
                                    //                     { "name": "DCL", "width": 120 },
                                    //                     { "name": "TCL", "width": 120 },
                                    //                 ]
                                    //             },
                                    //             { "name": "PostgreSQL", "width": 120 },
                                    //             { "name": "SQLite", "width": 120 },
                                    //         ]
                                    //     },
                                    //     {
                                    //         "name": "NoSQL",
                                    //         "width": 120,
                                    //         "children": [
                                    //             { "name": "MongoDB", "width": 120 },
                                    //             { "name": "Firebase", "width": 120 }
                                    //         ]
                                    //     }
                                    // ]
                                },
                                {
                                    "name": "Automation",
                                    "duration": "Duration: 1 Year",
                                    "money": "Money: 10,000 BDT",
                                    "width": 120,
                                    // "children": [
                                    //     {
                                    //         "name": "HTML",
                                    //         "type": "• Language",
                                    //         "level": "• Hard at beginning",
                                    //         "info": "• Choose one",
                                    //     },
                                    //     {
                                    //         "name": "CSS",
                                    //         "type": "• Language",
                                    //         "level": "• Easy as a first language",
                                    //         "info": "• Choose one",
                                    //         "children": [
                                    //             {
                                    //                 "name": "Bootstrap",
                                    //                 "type": "• Framework"
                                    //             }
                                    //         ]
                                    //     },
                                    //     {
                                    //         "name": "JavaScript",
                                    //         "type": "• Language",
                                    //         "level": "• Easy as a first language",
                                    //         "info": "• Choose one",
                                    //         "children": [
                                    //             {
                                    //                 "name": "React JS",
                                    //                 "type": "• Framework"
                                    //             }
                                    //         ]
                                    //     },
                                    // ]
                                },
                            ]
                        },
                    ]
                },
                { "name": "Self Dependency", "width": 120 },
                {
                    "name": "Multilingual",
                    "width": 120,
                    "children": [
                        { "name": "Bangla", "width": 120 },
                        { "name": "English", "width": 120 },
                        { "name": "Hindi", "width": 120 },
                        { "name": "Arabic", "width": 120 },
                        { "name": "Malay", "width": 120 },
                    ]
                },
                {
                    "name": "Sports Man",
                    "width": 120,
                    "children": [
                        { "name": "Cricket", "width": 120 },
                        { "name": "Football", "width": 120 },
                        { "name": "Badminton", "width": 120 },
                    ]
                },
                { "name": "Religious", "width": 120 },
                { "name": "Minimalism", "width": 120 },
            ]
        },
        {
            "name": "Journey-2",
            "width": 120,
            "children": [
                {
                "name": "Computer",
                "children": [
                    {
                        "name": "Learning Steps",
                        "width": 120,
                        "children": [
                            { "name": "Understand Course", "width": 130 },
                            { "name": "Take Notes", "width": 130 },
                            { "name": "Implement", "width": 130 },
                            { "name": "Problem Solving", "width": 130 },
                            { "name": "Projects", "width": 130 },
                            { "name": "Contribute", "width": 130 },
                        ]

                    },
                    {
                        "name": "Django Developer",
                        "width": 120,
                        "children": [
                            {
                                "name": "Python",
                                "width": 120,
                                "children": [
                                    {
                                        "name": "Basics",
                                        "width": 120,
                                        "children": [
                                            { "name": "Environment", "width": 120 },
                                            { "name": "Comment & Slash", "width": 120 },
                                            { "name": "Formating", "width": 120 },
                                            { "name": "Print & Input", "width": 120 },
                                            { "name": "Variable", "width": 120 },
                                            { "name": "Data Type", "width": 120 },
                                            { "name": "Operators", "width": 120 },
                                            { "name": "Control Flow", "width": 120 },
                                            { "name": "Function", "width": 120 },
                                            { "name": "Module", "width": 120 },
                                            { "name": "PIP and PyPi", "width": 120 },
                                            { "name": "Keywords", "width": 120 },
                                        ]
                                    },
                                    {
                                        "name": "Advanced",
                                        "width": 120,
                                        "children": [
                                            { "name": "OOP", "width": 120 },
                                            { "name": "File I/O", "width": 120 },
                                            { "name": "Used Module", "width": 120 }
                                        ]
                                    },
                                    {
                                        "name": "Mastery",
                                        "width": 120,
                                        "children": [
                                            { "name": "Decorator", "width": 120 },
                                            { "name": "Generator", "width": 120 },
                                            { "name": "Comprehension", "width": 120 },
                                            { "name": "Error Handling", "width": 120 },
                                            { "name": "Debuging", "width": 120 },
                                            { "name": "Recursion", "width": 120 },
                                            { "name": "Testing", "width": 120 },
                                            {
                                                "name": "Advanced Function",
                                                "width": 120,
                                                "children": [
                                                    { "name": "Lambda", "width": 120 },
                                                    { "name": "Map", "width": 120 },
                                                    { "name": "Filter", "width": 120 },
                                                    { "name": "Reduce", "width": 120 }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "name": "Deployement",
                                "width": 120,
                                "children": [
                                    { "name": "Git", "width": 120 },
                                    { "name": "GitHub", "width": 120 },
                                    { "name": "Heroku", "width": 120 },
                                    { "name": "Docker", "width": 120 }
                                ]
                            },
                            {
                                "name": "Database",
                                "width": 120,
                                "children": [
                                    {
                                        "name": "SQL",
                                        "width": 120,
                                        "children": [
                                            {
                                                "name": "MySQL",
                                                "width": 120,
                                                "children": [
                                                    {
                                                        "name": "DDL",
                                                        "width": 120,
                                                        "children": [
                                                            { "name": "CREATE", "width": 120 },
                                                            { "name": "ALTER", "width": 120 },
                                                            { "name": "DROP", "width": 120 },
                                                            { "name": "RENAME", "width": 120 },
                                                            { "name": "TRUNCATE", "width": 120 },
                                                        ]
                                                    },
                                                    {
                                                        "name": "DML",
                                                        "width": 120,
                                                        "children": [
                                                            { "name": "SELECT.. FROM..", "width": 150 },
                                                            { "name": "INSERT INTO.. VALUES", "width": 150 },
                                                            { "name": "UPDATE.. SET.. WHERE", "width": 150 },
                                                            { "name": "DELETE.. FROM.. WHERE", "width": 150 },
                                                        ]
                                                    },
                                                    { "name": "DCL", "width": 120 },
                                                    { "name": "TCL", "width": 120 },
                                                ]
                                            },
                                            { "name": "PostgreSQL", "width": 120 },
                                            { "name": "SQLite", "width": 120 },
                                        ]
                                    },
                                    {
                                        "name": "NoSQL",
                                        "width": 120,
                                        "children": [
                                            { "name": "MongoDB", "width": 120 },
                                            { "name": "Firebase", "width": 120 }
                                        ]
                                    }
                                ]
                            },
                            {
                                "name": "Frontend",
                                "width": 120,
                                "children": [
                                    {
                                        "name": "HTML",
                                        "type": "• Language",
                                        "level": "• Hard at beginning",
                                        "info": "• Choose one",
                                    },
                                    {
                                        "name": "CSS",
                                        "type": "• Language",
                                        "level": "• Easy as a first language",
                                        "info": "• Choose one",
                                        "children": [
                                            {
                                                "name": "Bootstrap",
                                                "type": "• Framework"
                                            }
                                        ]
                                    },
                                    {
                                        "name": "JavaScript",
                                        "type": "• Language",
                                        "level": "• Easy as a first language",
                                        "info": "• Choose one",
                                        "children": [
                                            {
                                                "name": "React JS",
                                                "type": "• Framework"
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                "name": "Django",
                                "width": 120,
                                "children": [
                                    {
                                        "name": "Architecture",
                                        "width": 120,
                                        "children": [
                                            { "name": "Model", "width": 120 },
                                            { "name": "View", "width": 120 },
                                            { "name": "Template", "width": 120 },
                                        ]
                                    },
                                    {
                                        "name": "Systems",
                                        "width": 120,
                                        "children": [
                                            { "name": "CRUD", "width": 120 },
                                            { "name": "Auth", "width": 120 },
                                            { "name": "ORM", "width": 120 },
                                            { "name": "Payment Gateway", "width": 120 },
                                            { "name": "Web Scrape", "width": 120 },
                                            { "name": "Celery", "width": 120 },
                                            { "name": "Web Socket", "width": 120 },
                                            { "name": "Chating", "width": 120 },
                                            { "name": "API Based", "width": 120 },
                                            { "name": "Portfolio", "width": 120 },
                                            { "name": "Ecomerce", "width": 120 },
                                        ]
                                    }
                                ]
                            },
                            {
                                "name": "REST API",
                                "width": 120
                            },
                        ]
                    },
                    {
                        "name": "Programmer",
                        "width": 120,
                        "children": [

                            {
                                "name": "Frontend",
                                "width": 120,
                                "children": [
                                    { "name": "HTML", "width": 120, },
                                    {
                                        "name": "CSS",
                                        "width": 120,
                                        "children": [
                                            { "name": "Bootstrap", "width": 120, }
                                        ]
                                    },
                                    {
                                        "name": "JavaScript",
                                        "width": 120,
                                        "children": [
                                            { "name": "React JS", "width": 120, }
                                        ]
                                    },
                                ]
                            },
                            {
                                "name": "Backend",
                                "width": 120,
                                "children": [
                                    {
                                        "name": "Python",
                                        "width": 120,
                                        "children": [
                                            { "name": "Django", "width": 120, }
                                        ]
                                    },
                                    { "name": "C", "width": 120, },
                                    { "name": "C++", "width": 120, },
                                    {
                                        "name": "JavaScript",
                                        "width": 120,
                                        "children": [
                                            { "name": "Node Js", "width": 120, }
                                        ]
                                    },
                                    {
                                        "name": "PHP",
                                        "width": 120,
                                        "children": [
                                            { "name": "Laravel", "width": 120, }
                                        ]
                                    },
                                ]
                            },
                            {
                                "name": "Deployement",
                                "width": 120,
                                "children": [
                                    { "name": "Git", "width": 120, },
                                    { "name": "Github", "width": 120, },
                                    { "name": "GitBucket", "width": 120, },
                                    { "name": "Docker", "width": 120, },
                                    { "name": "Heroku", "width": 120, },
                                    { "name": "Google Cloud", "width": 120, },
                                    { "name": "Amazon Cloud", "width": 120, }
                                ]
                            },
                            {
                                "name": "Database",
                                "width": 120,
                                "children": [
                                    {
                                        "name": "SQL",
                                        "width": 120,
                                        "children": [
                                            { "name": "MySQL", "width": 120, },
                                            { "name": "PostgreSQL", "width": 120, },
                                            { "name": "SQLite", "width": 120, }
                                        ]
                                    },
                                    {
                                        "name": "NoSql",
                                        "width": 120,
                                        "children": [
                                            { "name": "Firebase", "width": 120, },
                                            { "name": "MongoDB", "width": 120, }
                                        ]
                                    }
                                ]
                            },
                            {
                                "name": "Data Structure",
                                "width": 120,
                                "children": [
                                    {
                                        "name": "Built-in",
                                        "width": 120,
                                        "children": [
                                            { "name": "List", "width": 120, },
                                            { "name": "Tuple", "width": 120, },
                                            { "name": "Set", "width": 120, },
                                            { "name": "Dictionary", "width": 120, }
                                        ]
                                    },
                                    {
                                        "name": "User Define",
                                        "width": 120,
                                        "children": [
                                            { "name": "Stack", "width": 120, },
                                            { "name": "Queue", "width": 120, },
                                            { "name": "Linked List", "width": 120, },
                                            { "name": "Tree", "width": 120, },
                                            { "name": "Graph", "width": 120, },
                                            { "name": "Hashmap", "width": 120, }
                                        ]
                                    },
                                ]
                            },
                            {
                                "name": "Algorithm",
                                "width": 120,
                                "children": [
                                    { "name": "Tree Travels", "width": 120, },
                                    { "name": "Sorting", "width": 120, },
                                    { "name": "Searching", "width": 120, },
                                    {
                                        "name": "Complexcity",
                                        "type": "• Language",
                                        "children": [
                                            { "name": "Time", "width": 120, },
                                            { "name": "Space", "width": 120, },
                                        ]
                                    },
                                    {
                                        "name": "Notation",
                                        "type": "• Language",
                                        "children": [
                                            { "name": "Big Omega", "width": 120, },
                                            { "name": "Big Theta", "width": 120, },
                                        ]
                                    },
                                ]
                            },
                            { "name": "API", "width": 120, },
                            {
                                "name": "Career Sector",
                                "width": 120,
                                "children": [
                                    { "name": "Full Stack", "width": 120, },
                                    { "name": "Backend", "width": 120, },
                                    { "name": "Frontend", "width": 120, }
                                ]
                            }
                        ]
                    },
                ]
                },
                {
                    "name": "Immigration",
                    "width": 120,
                    "children": [
                        {
                            "name": "Reqular Job",
                            "width": 120,
                            "children": [
                                { "name": "Office", "width": 120 },
                                { "name": "Labor", "width": 120 },
                            ]
                        },
                        {
                            "name": "Computer",
                            "width": 120,
                            "children": [
                                { "name": "Django", "width": 120 },
                                { "name": "Hacker", "width": 120 },
                                { "name": "Frontend", "width": 120 },
                                { "name": "Backend", "width": 120 },
                                { "name": "Full Stack", "width": 120 },
                            ]
                        },
                        {
                            "name": "Daily Activities",
                            "width": 120,
                            "children": [
                                { "name": "Sleeping", "width": 120 },
                                { "name": "Eating", "width": 120 },
                                { "name": "Cleaning", "width": 120 },
                                { "name": "Exercising", "width": 120 },
                                { "name": "Calling", "width": 120 },
                            ]
                        }
                    ]
                },
                {
                    "name": "Present Activities",
                    "width": 120,
                    "children": [
                        { "name": "Sleep -7h", "width": 120 },
                        {
                            "name": "Mobile -6h",
                            "width": 120,
                            "children": [
                                { "name": "YouTube Scroll", "width": 120 },
                                { "name": "Try Do Perfection", "width": 120 },
                            ]
                        },
                        {
                            "name": "Computer -4h",
                            "width": 120,
                            "children": [
                                { "name": "Learn Something", "width": 120 },
                                { "name": "YouTube Scroll", "width": 120 },
                                { "name": "Try Do Perfection", "width": 120 },
                            ]
                        },
                        { "name": "Eat -2h", "width": 120 },
                        { "name": "Sport -1h:30m", "width": 120 },
                        { "name": "Prayer -1h", "width": 120 },
                        { "name": "Walking -1h", "width": 120 },
                        { "name": "Clean -30m", "width": 120 },
                        { "name": "Etc -1h", "width": 120 },
                    ]
                },
            ]
        },
    ]

};

var i = 0,
    duration = 1000,
    rectW = 70,
    rectH = 30;

var tree = d3.layout.tree().nodeSize([200, 40]);
var diagonal = d3.svg.diagonal()
    .projection(function (d) {
        return [d.x + (d.width ? d.width : rectW) / 2, d.y + rectH / 2];
    });

var svg = d3.select("#body").append("svg").attr("width", 10000).attr("height", 10000)
    .call(zm = d3.behavior.zoom().scaleExtent([1, 3]).on("zoom", redraw)).append("g")
    .attr("transform", "translate(" + 350 + "," + 20 + ")");

//necessary so that zoom knows where to zoom and unzoom from
zm.translate([350, 20]);

root.x0 = 0;
root.y0 = height / 2;

function collapse(d) {
    if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
    }
}

root.children.forEach(collapse);
update(root);

d3.select("#body").style("height", "800px");

function update(source) {

    // Compute the new tree layout.
    var nodes = tree.nodes(root).reverse(),
        links = tree.links(nodes);

    // Normalize for fixed-depth.
    nodes.forEach(function (d) {
        d.y = d.depth * 200;
    });

    // Update the nodes…
    var node = svg.selectAll("g.node")
        .data(nodes, function (d) {
            return d.id || (d.id = ++i);
        });

    // Enter any new nodes at the parent's previous position.
    var nodeEnter = node.enter().append("g")
        .attr("class", "node")
        .attr("transform", function (d) {
            return "translate(" + source.x0 + "," + source.y0 + ")";
        })
        .on("click", click);

    nodeEnter.append("rect")
        .attr("width", function (d) { return d.width ? d.width : rectW; })
        .attr("height", rectH)
        .attr("stroke", "#4cb7c3")
        .attr("stroke-width", 1)
        .style("fill", function (d) {
            return d._children ? "#42c9b5" : "#1f2029";
        });

    nodeEnter.append("text")
        .attr("x", function (d) { return d.width ? d.width / 2 : rectW / 2; })
        .attr("y", rectH / 2)
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .text(function (d) {
            return d.name;
        });

    nodeEnter.append("text")
        .attr("x", function (d) { return d.width ? d.width / 2 : rectW / 2; })
        .attr("y", rectH + 10)
        .attr("fill", "#fff")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .text(function (d) {
            return d.duration;
        });
    nodeEnter.append("text")
        .attr("x", function (d) { return d.width ? d.width / 2 : rectW / 2; })
        .attr("y", rectH + 24)
        .attr("fill", "#fff")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .text(function (d) {
            return d.money;
        });
    nodeEnter.append("text")
        .attr("x", function (d) { return d.width ? d.width / 2 : rectW / 2; })
        .attr("y", rectH + 38)
        .attr("fill", "#fff")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .text(function (d) {
            return d.info;
        });
    nodeEnter.append("text")
        .attr("x", function (d) { return d.width ? d.width / 2 : rectW / 2; })
        .attr("y", rectH + 24)
        .attr("fill", "#fff")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .text(function (d) {
            return d.data;
        });

    // Transition nodes to their new position.
    var nodeUpdate = node.transition()
        .duration(duration)
        .attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
        });

    nodeUpdate.select("rect")
        .attr("width", function (d) { return d.width ? d.width : rectW; })
        .attr("height", rectH)
        .attr("stroke", "#ed7b40")
        .attr("stroke-width", 1)
        .attr('color', 'red')
        .style('border-radius', '5px')
        .style("fill", function (d) {
            return d._children ? "#46485d" : "#ed7b40";
        });


    nodeUpdate.select("text")
        .style("fill-opacity", 1)
        .style("fill", function (d) {
            return d._children ? "#4cb8c2" : "#fff";
        })
        .style('font-weight', function (d) { return d._children ? 'bold' : 'normal' })

    // Transition exiting nodes to the parent's new position.
    var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function (d) {
            return "translate(" + source.x + "," + source.y + ")";
        })
        .remove();

    nodeExit.select("rect")
        .attr("width", rectW)
        .attr("height", rectH)
        //.attr("width", bbox.getBBox().width)""
        //.attr("height", bbox.getBBox().height)
        .attr("stroke", "white")
        .attr("stroke-width", 1);

    nodeExit.select("text");

    // Update the links…
    var link = svg.selectAll("path.link")
        .data(links, function (d) {
            return d.target.id;
        });

    // Enter any new links at the parent's previous position.
    link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("x", rectW / 2)
        .attr("y", rectH / 2)
        .attr("d", function (d) {
            var o = {
                x: source.x0,
                y: source.y0
            };
            return diagonal({
                source: o,
                target: o
            });
        });

    // Transition links to their new position.
    link.transition()
        .duration(duration)
        .attr("d", diagonal);

    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
        .duration(duration)
        .attr("d", function (d) {
            var o = {
                x: source.x,
                y: source.y
            };
            return diagonal({
                source: o,
                target: o
            });
        })
        .remove();

    // Stash the old positions for transition.
    nodes.forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
    });
}

// Toggle children on click.
function click(d) {
    if (d.children) {
        d._children = d.children;
        d.children = null;
    } else {
        d.children = d._children;
        d._children = null;
    }
    update(d);
}

//Redraw for zoom
function redraw() {
    //console.log("here", d3.event.translate, d3.event.scale);
    svg.attr("transform",
        "translate(" + d3.event.translate + ")"
        + " scale(" + d3.event.scale + ")");
}