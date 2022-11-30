interface SanityBody {
	_createdAt: string
	_id: string
	_rev: string
    _updatedAt: string
}

export interface Social extends SanityBody {
	_type: 'social'
	title: string
	url: string
}


interface Image {
    _type: 'Image',
    asset: {
        _ref: string,
        _type: 'reference'
    }
}

export interface PageInfo extends SanityBody {
    _type: 'pageInfo',
    address: string,
    backgroundInfo: string,
    email: string,
    role: string,
    personImage: Image,
    name: string,
    phoneNumber: string
    profilePic: Image
}

export interface Technology extends SanityBody {
    _type: 'skill',
    image: Image,
    progress: number,
    title: string
}


export interface Skill extends SanityBody {
    _type: 'skill',
    image: Image,
    progress: number,
    title: string
}

export interface Project extends SanityBody {
    _type: 'project',
    title: string,
    image: Image,
    linkToBuild: string,
    summary: string,
    technologies: Technology[]
}

export interface Experience extends SanityBody {
    _type: 'experience',
    company: string,
    companyImage: Image,
    dateStarted: date,
    dateEnded: date,
    isCurrentWork: boolean,
    jobTitle: string,
    points: string[],
    technologies: Technology[]
}


