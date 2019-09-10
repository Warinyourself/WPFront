export const actions = {
  async getBase64FromImages({ state, getters }, event) {
    const input = event.target

    const files = await Promise.all(
      Array.from(input.files, (file) => {
        const { name, size, type } = file

        return new Promise((resolve) => {
          const reader = new FileReader()
          reader.onload = (e) => {
            return resolve({
              name,
              size,
              value: reader.result,
              type
            })
          }

          reader.readAsDataURL(file)
        })
      })
    )

    return files
  }
}
