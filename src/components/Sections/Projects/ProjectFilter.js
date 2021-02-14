import React, { useEffect, useState, useRef } from "react"
import $ from "jquery"

const techStack = ["ALL", "JAVASCRIPT", "REACT", "DJANGO"]

const ProjectFilter = ({ onProjectTechChange, filterValue, forwardedRef }) => {
  const [selectOpen, setSelectOpen] = useState(false)

  const projectFilterRef = useRef(null)
  const customSelectRef = useRef(null)
  const selectWrapperRef = useRef(null)

  useEffect(() => {
    const handleCheckSelectOpen = e => {
      if (selectOpen) {
        if (
          e.target === customSelectRef.current ||
          !customSelectRef.current.contains(e.target)
        ) {
          customSelectRef.current.classList.remove("opened")
          setSelectOpen(false)
        }
      }
    }
    document.addEventListener("click", handleCheckSelectOpen, true)
    return () => {
      document.removeEventListener("click", handleCheckSelectOpen, true)
    }
  }, [selectOpen])

  const handleOpenSelectChange = e => {
    const isOpen = e.target.parentElement.classList.toggle("opened")
    setSelectOpen(isOpen)
  }

  const handleSelectOptionPick = e => {
    onProjectTechChange(e.target.textContent.toLowerCase())
    e.target.parentElement.childNodes.forEach(child => {
      child.classList.remove("selection")
    })
    e.target.classList.add("selection")
    customSelectRef.current.classList.remove("opened")
    setSelectOpen(false)
  }

  useEffect(() => {
    $(".my-custom-option").on("click", function () {
      $(this)
        .parents(".my-custom-select-wrapper")
        .find("select")
        .val($(this).data("value"))
    })
  }, [])

  return (
    <div ref={projectFilterRef} className="project-filter">
      <div className="my-custom-select-wrapper" ref={selectWrapperRef}>
        <select
          className="my-custom-select sources"
          placeholder="ALL"
          value={filterValue}
          onChange={handleSelectOptionPick}
          ref={forwardedRef}
        >
          {techStack.map(tech => {
            return (
              <option key={tech} value={tech.toLowerCase()}>
                {tech}
              </option>
            )
          })}
        </select>
        <div
          className="my-custom-select sources"
          onClick={handleOpenSelectChange}
          ref={customSelectRef}
        >
          <span className="my-custom-select-trigger">
            {filterValue.toUpperCase()}
          </span>
          <div className="my-custom-options">
            {techStack.map(tech => {
              return (
                <span
                  key={tech}
                  className={`my-custom-option ${
                    tech === "ALL" ? "selection" : "".trim()
                  }`}
                  onClick={handleSelectOptionPick}
                >
                  {tech}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectFilter
