var express = require('express');
var router = express.Router();

const student_summary = [
    {
        "name": "Aaron Bush",
        "Username": "aaronbush100",
        "NumRepos": 20,
        "NumFollowers": 2
    },
    {
        "name": "Alex Vohs",
        "Username": "avohs24",
        "NumRepos": 20,
        "NumFollowers": 2
    },
    {
        "name": "Alfred Avor",
        "Username": "aaronbush100",
        "NumRepos": 20,
        "NumFollowers": 2
    },
    {
        "name": "Andrew Wong",
        "Username": "wongathon",
        "NumRepos": 20,
        "NumFollowers": 2
    },
    {
        "name": "August Conwell",
        "Username": "asconwe",
        "NumRepos": 20,
        "NumFollowers": 2
    },
    {
        "name": "Benga Akingbe",
        "Username": "akingbe1",
        "NumRepos": 20,
        "NumFollowers": 2
    },
    {
        "name": "Cary Cooper",
        "Username": "minicooperj",
        "NumRepos": 20,
        "NumFollowers": 2
    },
    {
        "name": "Chris Stuckey",
        "Username": "CStuckey",
        "NumRepos": 20,
        "NumFollowers": 2
    },
    {
        "name": "Cris Ayala Paz",
        "Username": "crisayala16",
        "NumRepos": 23,
        "NumFollowers": 2
    },
    {
        "name": "Damien Asseya",
        "Username": "dasseya1",
        "NumRepos": 12,
        "NumFollowers": 2
    }
];

const students_detail =
    {
        "aaronbush100": {
            "name": "Aaron Bush",
            "Username": "aaronbush100",
            "NumRepos": 2,
            "NumFollowers": 2,
            "Repos": {
                "Proj1": {
                    name: "Proj1",
                    createdAt: "",
                    updatedAt: "",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ligula turpis, interdum finibus rutrum viverra, fermentum ut leo. Sed eu nunc lacinia, scelerisque erat sed, egestas mi. Fusce ut elit quis lorem rutrum gravida non sed ante. Proin vitae lacus ultrices, elementum purus nec, porttitor lorem. Quisque interdum a arcu vel dictum. Nam ultricies justo in justo fringilla vulputate. "
                },
                "Proj2": {
                    name: "Proj1",
                    createdAt: "",
                    updatedAt: "",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ligula turpis, interdum finibus rutrum viverra, fermentum ut leo. Sed eu nunc lacinia, scelerisque erat sed, egestas mi. Fusce ut elit quis lorem rutrum gravida non sed ante. Proin vitae lacus ultrices, elementum purus nec, porttitor lorem. Quisque interdum a arcu vel dictum. Nam ultricies justo in justo fringilla vulputate. "
                }
            }
        },
        "avohs24": {
            "name": "Alex Vohs",
            "Username": "avohs24",
            "NumRepos": 2,
            "NumFollowers": 2,
            "Repos": {
                "Proj1": {
                    name: "Proj1",
                    createdAt: "",
                    updatedAt: "",
                    description: "Quisque quis dapibus metus, id iaculis felis. Vivamus sit amet consectetur quam. Nulla ornare quam in sapien bibendum pharetra. Curabitur id felis bibendum, facilisis eros sit amet, volutpat enim. Etiam dignissim, tortor eu rhoncus accumsan, lectus ex porta nibh, et tempor justo tellus ut orci. "
                },
                "Proj2": {
                    name: "Proj1",
                    createdAt: "",
                    updatedAt: "",
                    description: "Quisque quis dapibus metus, id iaculis felis. Vivamus sit amet consectetur quam. Nulla ornare quam in sapien bibendum pharetra. Curabitur id felis bibendum, facilisis eros sit amet, volutpat enim. Etiam dignissim, tortor eu rhoncus accumsan, lectus ex porta nibh, et tempor justo tellus ut orci. "
                }
            }
        },
        "aavor": {
            "name": "Alfred Avor",
            "Username": "aaronbush100",
            "NumRepos": 2,
            "NumFollow": 2,
            "Repos": {
                "Proj1": {
                    name: "Proj1",
                    createdAt: "",
                    updatedAt: "",
                    description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                },
                "Proj2": {
                    name: "Proj1",
                    createdAt: "",
                    updatedAt: "",
                    description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis.  "
                }
            }
        },
        "wongathon": {
            "name": "Andrew Wong",
            "Username": "wongathon",
            "NumRepos": 2,
            "NumFollowers": 2,
            "Repos": {
                "Proj1": {
                    name: "Proj1",
                    createdAt: "",
                    updatedAt: "",
                    description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                },
                "Proj2": {
                    name: "Proj1",
                    createdAt: "",
                    updatedAt: "",
                    description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                }
            }
        },
        "asconwe": {
            "name": "August Conwell",
            "Username": "asconwe",
            "NumRepos": 2,
            "NumFollowers": 2,
            "Repos": {
                "Proj1": {
                    name: "Proj1",
                    createdAt: "",
                    updatedAt: "",
                    description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                },
                "Proj2": {
                    name: "Proj1",
                    createdAt: "",
                    updatedAt: "",
                    description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                }
            }
        },
        "akingbe1": {
            "name": "Benga Akingbe",
            "Username": "akingbe1",
            "NumRepos": 2,
            "NumFollowers": 2,
            "Repos": {
                "Proj1": {
                    name: "Proj1",
                    createdAt: "",
                    updatedAt: "",
                    description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                },
                "Proj2": {
                    name: "Proj1",
                    createdAt: "",
                    updatedAt: "",
                    description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                }
            }
        },
        "minicooperj": {
            "name": "Cary Cooper",
            "Username": "minicooperj",
            "NumRepos": 2,
            "NumFollowers": 2,
            "Repos": {
                "Proj1": {
                    name: "Proj1",
                    createdAt: "",
                    updatedAt: "",
                    description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                },
                "Proj2": {
                    name: "Proj1",
                    createdAt: "",
                    updatedAt: "",
                    description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                }
            }
        },
        "CStuckey": {
            "name": "Chris Stuckey",
            "Username": "CStuckey",
            "NumRepos": 2,
            "NumFollowers": 2,
            "Repos": {
                "Proj1": {
                    name: "Proj1",
                    createdAt: "",
                    updatedAt: "",
                    description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                },
                "Proj2": {
                    name: "Proj1",
                    createdAt: "",
                    updatedAt: "",
                    description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                }
            }
        },
        "crisayala16": {
            "name": "Cris Ayala Paz",
            "Username": "crisayala16",
            "NumRepos": 2,
            "NumFollowers": 2,
            "Repos": {
                "Proj1": {
                    name: "Proj1",
                    createdAt: "",
                    updatedAt: "",
                    description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                },
                "Proj2": {
                    name: "Proj1",
                    createdAt: "",
                    updatedAt: "",
                    description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                }
            }
        },
        "dasseya1": {
            "name": "Damien Asseya",
            "Username": "dasseya1",
            "NumRepos": 2,
            "NumFollowers": 2,
            "Repos": {
                "Proj1": {
                    name: "Proj1",
                    createdAt: "",
                    updatedAt: "",
                    description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                },
                "Proj2": {
                    name: "Proj1",
                    createdAt: "",
                    updatedAt: "",
                    description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                }
            }
        }
    };

router.get('/', function (req, res, next) {
    res.json(student_summary);
});

router.get('/:id', function(req, res, next) {
    var login_id = req.params.id;
    if (students_detail.hasOwnProperty(login_id)) {
        res.json(students_detail[login_id]);
    }else {
        res.status(404).send("Not Found");
    }
});

module.exports = router;
