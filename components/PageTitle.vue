<template>
    <div :style="style" class="page-title" :class="align">
        <h1>
            <i v-if="icon" :class="icon" class="fas"></i>
            {{title}}
        </h1>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            default: 'Titre par défaut',
            type: String
        },
        align: {
            default: 'center',
            type: String
        },
        padding: {
            default: 10,
            type: Number
        },
        icon: {
            default: null,
            type: String
        }
    },
    computed: {
        style() {
            return {
                padding: `${this.padding}px 0`
            }
        }
    }
}
</script>

<style lang="scss">
.page-title {
  &.center {
    text-align: center;
  }
  &.right {
    text-align: right;
  }
  &.left {
    text-align: left;
  }
  h1 {
    margin: 0;
    padding: 0;
  }
}
</style>
