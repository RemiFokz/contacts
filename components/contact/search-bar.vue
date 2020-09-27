<template>
  <div>
    <input
      type="text"
      class="input-field"
      placeholder="search"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>