import React, { useState, useMemo, useEffect, useRef } from "react";
import data from "../data/job-references.json";
import SinglePageSidebar from "./single-page-sidebar";
import { Trans } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const AllJobReferences = ({ title }) => {
  const { allJobReferences } = data;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const hasScrolled = useRef(false);
  
  // Filter job references based on category and search
  const filteredJobReferences = useMemo(() => {
    let filtered = allJobReferences;
    
    // Filter by category
    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.filter(job => job.tag === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(job => 
        job.client.toLowerCase().includes(query) ||
        job.clientChinese.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query) ||
        job.projectType.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [allJobReferences, selectedCategory, searchQuery]);

  // Handle scroll when navigating from homepage with scrollToRow state
  useEffect(() => {
    if (location.state?.scrollToRow !== undefined && !hasScrolled.current) {
      hasScrolled.current = true;
      const scrollToIndex = location.state.scrollToRow;
      
      // Get the target project ID from the original allJobReferences (unfiltered)
      // The scrollToRow index refers to the position in the original projects.json (homepage 6 projects)
      // which correspond to the first 6 entries in allJobReferences
      const targetJobRef = allJobReferences[scrollToIndex];
      
      if (targetJobRef) {
        // Wait for DOM to render, then scroll to the specific job reference
        setTimeout(() => {
          const targetElement = document.querySelector(
            `[data-job-ref-id="${targetJobRef.id}"]`
          );
          
          if (targetElement) {
            // Get navbar height (typically 70-80px, we'll account for it)
            const navBar = document.querySelector('nav') || document.querySelector('header');
            const navbarHeight = navBar ? navBar.offsetHeight : 80;
            
            // Calculate scroll position with navbar offset
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;
            
            // Smooth scroll to the calculated position
            window.scrollTo({
              top: targetPosition,
              behavior: "smooth"
            });
            
            // Add a subtle highlight effect
            targetElement.style.backgroundColor = 'rgba(255, 200, 0, 0.1)';
            setTimeout(() => {
              targetElement.style.backgroundColor = '';
            }, 2000);
          }
        }, 300);
      }
    } else if (!location.state?.scrollToRow) {
      // Reset the flag when navigating without scrollToRow
      hasScrolled.current = false;
    }
  }, [location.state?.scrollToRow, allJobReferences]);
  
  return (
    <>
      <div className="blog-hero bg-one">
        <div className="container">
          <div className="row">
            <div className="blog-title">
              <h1 className="display-3">
                <Trans i18nKey="allJobReferencesHero.title">{title}</Trans>
              </h1>
              <ul>
                <li>
                  <Link to="/">
                    <Trans i18nKey="allJobReferencesHero.home">Home</Trans>
                  </Link>
                </li>
                <li>
                  <i className="icofont-rounded-right"></i>
                </li>
                <li>
                  <Trans i18nKey="allJobReferencesHero.title">{title}</Trans>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding all-blogs">
        <div className="container">
          <div className=" row gx-xl-5">
            <div className="col-md-12 col-lg-8 mb-4 mb-md-0 all-blogs__card">
              {filteredJobReferences.length === 0 ? (
                <div className="text-center py-5">
                  <h4>No job references found</h4>
                  <p className="text-muted">Try adjusting your filters or search query</p>
                </div>
              ) : (
                filteredJobReferences.map((jobRef) => {
                  // Find the original index in allJobReferences for correct translation key
                  const originalIndex = allJobReferences.findIndex(ref => ref.id === jobRef.id);
                  return (
                <div key={jobRef.id} data-job-ref-id={jobRef.id} className="row all-blogs__card__single mb-4">
                  <div className="col-md-4 mb-3 mb-md-0">
                    <img
                      className="img-fluid"
                      src={jobRef.image}
                      alt={jobRef.client}
                    />
                  </div>
                  <div className="col-md-8">
                    <span>
                      <Trans i18nKey={`allJobReferences.jobRef${originalIndex + 1}.projectType`}>
                        {jobRef.tag}
                      </Trans>
                    </span>
                    <h3 className="my-3">
                      <Trans i18nKey={`allJobReferences.jobRef${originalIndex + 1}.client`}>
                        {jobRef.client}
                      </Trans>
                    </h3>
                    <h5 className="client-english mb-2">
                      <Trans i18nKey={`allJobReferences.jobRef${originalIndex + 1}.clientChinese`}>
                        {jobRef.clientChinese}
                      </Trans>
                    </h5>
                    <p className="mb-2">
                      <i className="icofont-location-pin"></i>{" "}
                      <Trans i18nKey={`allJobReferences.jobRef${originalIndex + 1}.location`}>
                        {jobRef.location}
                      </Trans>
                    </p>
                    <p>
                      <Trans i18nKey={`allJobReferences.jobRef${originalIndex + 1}.details`}>
                        {jobRef.description}
                      </Trans>
                    </p>
                  </div>
                </div>
                  );
                })
              )}
            </div>
            <aside className="col-md-12 col-lg-4 mb-4 mb-md-0 sidebar">
              <SinglePageSidebar 
                onCategorySelect={setSelectedCategory}
                selectedCategory={selectedCategory}
                onSearch={setSearchQuery}
                searchQuery={searchQuery}
              />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllJobReferences;
