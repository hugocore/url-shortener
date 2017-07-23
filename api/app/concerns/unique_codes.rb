module UniqueCodes
  MAX_NUMBER_OF_CHARS = 6

  # Ban characters that can generate 'Penis'
  BANNED_CHARACTERS = %w(a A e E i I).freeze

  # Characters to choose from to generate a code
  CHARSET = ('a'..'z').to_a + ('A'..'Z').to_a + (0..9).to_a - BANNED_CHARACTERS

  # Generates a random, unique and small code
  def generate_small_code(field)
    loop do
      code = (0..MAX_NUMBER_OF_CHARS).map { CHARSET[rand(CHARSET.size)] }.join

      return code unless self.class.exists?(field => code)
    end
  end
end
