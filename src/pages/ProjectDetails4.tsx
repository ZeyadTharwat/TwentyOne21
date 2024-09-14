import DesignDetails from '../components/Projects4/DesignDetails'
import ProjectDetail from '../components/Projects4/ProjectDetail'
import VideoSection from '../components/Projects4/VideoSection'
import HeroSection from '../components/Shared/HeroSection'

const ProjectDetails4 = () => {
  return (
    <>
        <HeroSection back='/our-creations' page="Project Details" breadcrumb="creations"/>

        <ProjectDetail/>
        <VideoSection/>
        <DesignDetails/>
        </>
  )
}

export default ProjectDetails4