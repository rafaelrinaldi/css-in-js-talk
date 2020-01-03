const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: 'papayawhip'
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold'
  },

  activeTitle: {
    color: 'fuchsia'
  }
})

const Header = ({ isActive }) => (
  <View style={styles.container}>
    {/* `style` takes in an array of values (!) */}
    <Text style={[styles.title, isActive && styles.activeTitle]} />
  </View>
)
