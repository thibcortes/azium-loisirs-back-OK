const removeTags = (content) => {
    return content.replace(/<.*?>/gm, '');
}

const formatPost = (p) => {
    let post = {
        id: p.id,
        image: null,
        title: removeTags(p.title.rendered) || null,
        content: removeTags(p.content.rendered),
        age: p.cmb2.Activites.age_taille,
        buttonLabel: p.cmb2.Activites.label_bouton,
        buttonLink: p.cmb2.Activites.lien_bouton,
        redirection: p.cmb2.Mosaic.redirection,
        classBloc: p.cmb2.Mosaic.class || null,
        box_tarif: p.cmb2['Activite-enfant-tarifs-details'],
        box_loisirs: p.cmb2['loisirs'] || null,
        box_tarifs_anniv: p.cmb2['tarifs_anniversaire'] || null,
        boxAvis: p.cmb2['avis'] || null,
        boxEnfant: p.cmb2['Activite-enfant-presentation'] || null,
        
        
    }
    if (p._embedded !== undefined) {
        post.image = p._embedded['wp:featuredmedia'][0].source_url
    }
    return post
}

const formatPosts = (data) => {
    let posts = {}
    data.map(p => {
        posts[p.id] = formatPost(p)
    })
    return posts
}

const formatPages = (data) => {
    let pages = {}
    data.map(p => {
        pages[p.id] = formatPage(p)
    })
    return pages
}

const formatPage = (p) => {
    let page = {
        title: removeTags(p.title.rendered) || null,
        id: p.id,
        image: null,
        content: removeTags(p.content.rendered),
        boxActivites: p.cmb2.Activites,
        boxMosaic: p.cmb2.Mosaic,
        boxTarif: p.cmb2['Activite-enfant-tarifs-details'],
        boxEnfant: p.cmb2['Activite-enfant-presentation'] || null,
        boxLoisirs: p.cmb2['loisirs'] || null,
        boxTarifsAnniv: p.cmb2['tarifs_anniversaire'] || null,
        boxContact: p.cmb2['contact'] || null
    }
    if (p._embedded !== undefined) {
        page.image = p._embedded['wp:featuredmedia'][0].source_url
    }
    return page
}

export default {
    formatPage,
    formatPages,
    formatPost,
    formatPosts
}