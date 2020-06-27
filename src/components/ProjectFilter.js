import React, { useEffect } from 'react';
import $ from 'jquery';

const ProjectFilter = () => {
    useEffect(() => {
        $(".my-custom-select").each(function () {
            const classes = $(this).attr("class");
            let template = '<div class="' + classes + '">';
            template +=
                '<span class="my-custom-select-trigger">' +
                $(this).attr("placeholder") +
                "</span>";
            template += '<div class="my-custom-options">';
            $(this)
                .find("option")
                .each(function () {
                    template +=
                        '<span class="my-custom-option' +
                        '" data-value="' +
                        $(this).attr("value") +
                        '">' +
                        $(this).html() +
                        "</span>";
                });
            template += "</div></div>";

            $(this).wrap('<div class="my-custom-select-wrapper"></div>');
            $(this).hide();
            $(this).after(template);
        });
        $(".my-custom-option:first-of-type").hover(
            function () {
                $(this)
                    .parents(".my-custom-options")
                    .addClass("option-hover");
            },
            function () {
                $(this)
                    .parents(".my-custom-options")
                    .removeClass("option-hover");
            }
        );
        $(".my-custom-select-trigger").on("click", function (event) {
            $("html").one("click", function () {
                $(".my-custom-select").removeClass("opened");
            });
            $(this)
                .parents(".my-custom-select")
                .toggleClass("opened");
            event.stopPropagation();
        });
        $(".my-custom-option").on("click", function () {
            $(this)
                .parents(".my-custom-select-wrapper")
                .find("select")
                .val($(this).data("value"));
            $(this)
                .parents(".my-custom-options")
                .find(".my-custom-option")
                .removeClass("selection");
            $(this).addClass("selection");
            $(this)
                .parents(".my-custom-select")
                .removeClass("opened");
            $(this)
                .parents(".my-custom-select")
                .find(".my-custom-select-trigger")
                .text($(this).text());
        });

        // PROJECT FILTERING
        $(".my-custom-options").click(function (e) {
            $(".project").hide();
            if ($(e.target).hasClass('selection')) {
                if ($(e.target).attr("data-value") == "all") {
                    $(".project").show();
                } else {
                    $("." + $(e.target).attr("data-value")).show()
                }
            }
        });
    }, []);

    return (
        <div className="project-filter">
            <select className="my-custom-select sources" placeholder="ALL">
                <option value="all">ALL</option>
                <option value="javascript">JAVASCRIPT</option>
                <option value="react">REACT</option>
                <option value="python">PYTHON</option>
                <option value="django">DJANGO</option>
            </select>
        </div>
    )
}

export default ProjectFilter;