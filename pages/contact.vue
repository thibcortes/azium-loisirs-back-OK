<template>
    <formulaire :nom='nom' :prenom='prenom' :tel='tel' :mail='mail' :message='message'></formulaire>
</template>

<script>
import api from '~/api'

export default {
    
    async asyncData() {
        let res = await api.getPageBySlug('contact')
        console.log(res)
        return {
            nom: res.boxContact.nom,
            prenom: res.boxContact.prenom,
            tel: res.boxContact.tel,
            mail: res.boxContact.mail,
            message: res.boxContact.message,
        }
    },
}
</script>

<style>

</style>
