copy: {
    main: {
            expand: true,
            cwd: "node_modules/",
            src: [

                "bootstrap/dist/css/bootstrap.min.css",
                "bootstrap/dist/css/bootstrap.min.css.map",
                "bootstrap/*.*",
                "bootstrap/**/*.*"
            ],

            "dest": "server/public/vendor/"
    };
};