var express = require('express');
var router = express.Router();

const student_summary = {
    "aaronbush100": {
        "Name": "Aaron Bush",
        "Username": "aaronbush100",
        "NumRepos": 20,
        "NumFollowers": 2
    },

    "avohs24": {
        "Name": "Alex Vohs",
        "Username": "avohs24",
        "NumRepos": 20,
        "NumFollowers": 2
    },
    "aavor": {
        "Name": "Alfred Avor",
        "Username": "aaronbush100",
        "NumRepos": 20,
        "NumFollowers": 2
    },
    "wongathon": {
        "Name": "Andrew Wong",
        "Username": "wongathon",
        "NumRepos": 20,
        "NumFollowers": 2
    },
    "asconwe": {
        "Name": "August Conwell",
        "Username": "asconwe",
        "NumRepos": 20,
        "NumFollowers": 2
    },
    "akingbe1": {
        "Name": "Benga Akingbe",
        "Username": "akingbe1",
        "NumRepos": 20,
        "NumFollowers": 2
    },
    "minicooperj": {
        "Name": "Cary Cooper",
        "Username": "minicooperj",
        "NumRepos": 20,
        "NumFollowers": 2
    },
    "CStuckey": {
        "Name": "Chris Stuckey",
        "Username": "CStuckey",
        "NumRepos": 20,
        "NumFollowers": 2
    },
    "crisayala16": {
        "Name": "Cris Ayala Paz",
        "Username": "crisayala16",
        "NumRepos": 23,
        "NumFollowers": 2
    },
    "dasseya1": {
        "Name": "Damien Asseya",
        "Username": "dasseya1",
        "NumRepos": 12,
        "NumFollowers": 2
    }
};

const students_detail =
    {
        "aaronbush100": {
            "Name": "Aaron Bush",
            "Username": "aaronbush100",
            "NumRepos": 2,
            "NumFollowers": 2,
            "Repos": {
                "Proj1": {
                    Name: "Proj1",
                    CreatedTime: "",
                    UpdatedTime: "",
                    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ligula turpis, interdum finibus rutrum viverra, fermentum ut leo. Sed eu nunc lacinia, scelerisque erat sed, egestas mi. Fusce ut elit quis lorem rutrum gravida non sed ante. Proin vitae lacus ultrices, elementum purus nec, porttitor lorem. Quisque interdum a arcu vel dictum. Nam ultricies justo in justo fringilla vulputate. "
                },
                "Proj2": {
                    Name: "Proj1",
                    CreatedTime: "",
                    UpdatedTime: "",
                    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ligula turpis, interdum finibus rutrum viverra, fermentum ut leo. Sed eu nunc lacinia, scelerisque erat sed, egestas mi. Fusce ut elit quis lorem rutrum gravida non sed ante. Proin vitae lacus ultrices, elementum purus nec, porttitor lorem. Quisque interdum a arcu vel dictum. Nam ultricies justo in justo fringilla vulputate. "
                }
            }
        },
        "avohs24": {
            "Name": "Alex Vohs",
            "Username": "avohs24",
            "NumRepos": 2,
            "NumFollowers": 2,
            "Repos": {
                "Proj1": {
                    Name: "Proj1",
                    CreatedTime: "",
                    UpdatedTime: "",
                    Description: "Quisque quis dapibus metus, id iaculis felis. Vivamus sit amet consectetur quam. Nulla ornare quam in sapien bibendum pharetra. Curabitur id felis bibendum, facilisis eros sit amet, volutpat enim. Etiam dignissim, tortor eu rhoncus accumsan, lectus ex porta nibh, et tempor justo tellus ut orci. "
                },
                "Proj2": {
                    Name: "Proj1",
                    CreatedTime: "",
                    UpdatedTime: "",
                    Description: "Quisque quis dapibus metus, id iaculis felis. Vivamus sit amet consectetur quam. Nulla ornare quam in sapien bibendum pharetra. Curabitur id felis bibendum, facilisis eros sit amet, volutpat enim. Etiam dignissim, tortor eu rhoncus accumsan, lectus ex porta nibh, et tempor justo tellus ut orci. "
                }
            }
        },
        "aavor": {
            "Name": "Alfred Avor",
            "Username": "aaronbush100",
            "NumRepos": 2,
            "NumFollow": 2,
            "Repos": {
                "Proj1": {
                    Name: "Proj1",
                    CreatedTime: "",
                    UpdatedTime: "",
                    Description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                },
                "Proj2": {
                    Name: "Proj1",
                    CreatedTime: "",
                    UpdatedTime: "",
                    Description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis.  "
                }
            }
        },
        "wongathon": {
            "Name": "Andrew Wong",
            "Username": "wongathon",
            "NumRepos": 2,
            "NumFollowers": 2,
            "Repos": {
                "Proj1": {
                    Name: "Proj1",
                    CreatedTime: "",
                    UpdatedTime: "",
                    Description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                },
                "Proj2": {
                    Name: "Proj1",
                    CreatedTime: "",
                    UpdatedTime: "",
                    Description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                }
            }
        },
        "asconwe": {
            "Name": "August Conwell",
            "Username": "asconwe",
            "NumRepos": 2,
            "NumFollowers": 2,
            "Repos": {
                "Proj1": {
                    Name: "Proj1",
                    CreatedTime: "",
                    UpdatedTime: "",
                    Description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                },
                "Proj2": {
                    Name: "Proj1",
                    CreatedTime: "",
                    UpdatedTime: "",
                    Description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                }
            }
        },
        "akingbe1": {
            "Name": "Benga Akingbe",
            "Username": "akingbe1",
            "NumRepos": 2,
            "NumFollowers": 2,
            "Repos": {
                "Proj1": {
                    Name: "Proj1",
                    CreatedTime: "",
                    UpdatedTime: "",
                    Description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                },
                "Proj2": {
                    Name: "Proj1",
                    CreatedTime: "",
                    UpdatedTime: "",
                    Description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                }
            }
        },
        "minicooperj": {
            "Name": "Cary Cooper",
            "Username": "minicooperj",
            "NumRepos": 2,
            "NumFollowers": 2,
            "Repos": {
                "Proj1": {
                    Name: "Proj1",
                    CreatedTime: "",
                    UpdatedTime: "",
                    Description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                },
                "Proj2": {
                    Name: "Proj1",
                    CreatedTime: "",
                    UpdatedTime: "",
                    Description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                }
            }
        },
        "CStuckey": {
            "Name": "Chris Stuckey",
            "Username": "CStuckey",
            "NumRepos": 2,
            "NumFollowers": 2,
            "Repos": {
                "Proj1": {
                    Name: "Proj1",
                    CreatedTime: "",
                    UpdatedTime: "",
                    Description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                },
                "Proj2": {
                    Name: "Proj1",
                    CreatedTime: "",
                    UpdatedTime: "",
                    Description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                }
            }
        },
        "crisayala16": {
            "Name": "Cris Ayala Paz",
            "Username": "crisayala16",
            "NumRepos": 2,
            "NumFollowers": 2,
            "Repos": {
                "Proj1": {
                    Name: "Proj1",
                    CreatedTime: "",
                    UpdatedTime: "",
                    Description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                },
                "Proj2": {
                    Name: "Proj1",
                    CreatedTime: "",
                    UpdatedTime: "",
                    Description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                }
            }
        },
        "dasseya1": {
            "Name": "Damien Asseya",
            "Username": "dasseya1",
            "NumRepos": 2,
            "NumFollowers": 2,
            "Repos": {
                "Proj1": {
                    Name: "Proj1",
                    CreatedTime: "",
                    UpdatedTime: "",
                    Description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
                },
                "Proj2": {
                    Name: "Proj1",
                    CreatedTime: "",
                    UpdatedTime: "",
                    Description: "Nam eget euismod lorem, in sodales augue. Praesent dapibus quam at erat facilisis, id fringilla dui lobortis."
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
