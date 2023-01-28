public static List<String> weightedUniformStrings(String s, List<Integer> queries) {
    Set<Integer> weights = new HashSet<Integer>();
    char previous = '.';
    int previousWeight = 0;
    for (char c : s.toCharArray()) {
        if (c == previous) {
            previousWeight += (c - 'a') + 1;
        } else {
            previous = c;
            previousWeight = (c - 'a') + 1;
        }
        weights.add(previousWeight);
    }
    
    List<String> result = new ArrayList<>();
    for(int a0 = 0; a0 < queries.size(); a0++){
        int x = queries.get(a0);
        if (weights.contains(x)) {
            result.add("Yes");
        } else {
            result.add("No");
        }
    }

    return result;
}