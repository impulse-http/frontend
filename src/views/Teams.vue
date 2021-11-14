<template>
  <div class="teams-view">
    <modal v-model="modalVisible" width="500px">
      <template v-slot:header>New team</template>
      <template v-slot:body>
        <pretty-input v-model="teamName" label="Name"/>
        <pretty-input v-model="teamDescription" label="Description"/>
      </template>
      <template v-slot:footer>
        <pretty-button>Create</pretty-button>
      </template>
    </modal>
    <div class="teams-view-header">
      <pretty-button
        class="create-button"
        @click="modalVisible = !modalVisible"
      >
        New team
      </pretty-button>
    </div>
    <div class="teams">
      <team-card
        class="item"
        v-for="team in teams"
        :key="team.id"
        :name="team.name"
        :description="team.description"
        :members="team.members"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import teams from '@/mocks/teams';
import TeamCard from '@/components/TeamCard.vue';
import stripTo from '@/utils/string';
import PrettyButton from '@/components/PrettyButton.vue';
import PrettyInput from '@/components/PrettyInput.vue';
import Modal from '@/components/Modal.vue';

export default defineComponent({
  name: 'Teams',
  components: {
    PrettyInput,
    PrettyButton,
    TeamCard,
    Modal,
  },
  setup() {
    const items = ref(teams.map((it) => ({ ...it, description: stripTo(it.description, 80) })));
    const teamName = ref('');
    const teamDescription = ref('');
    const modalVisible = ref(false);
    return {
      teams: items,
      teamName,
      teamDescription,
      modalVisible,
    };
  },
});
</script>

<style scoped>
.teams-view {
  padding: 30px;
}

.teams-view-header {
  margin-bottom: 20px;
}

.teams-view-header {
  display: flex;
  flex-direction: row;
}

.teams {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 40px;
}
</style>
