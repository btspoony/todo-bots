<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  render: createElement => createElement('div'),
  middleware (ctx) {
    ctx.redirect('/quests/addsub')
  }
})
export default class IndexComponent extends Vue {}
</script>
