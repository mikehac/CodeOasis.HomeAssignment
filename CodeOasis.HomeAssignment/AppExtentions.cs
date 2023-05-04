namespace CodeOasis.HomeAssignment
{
    public static class AppExtentions
    {
        public static TValue GetValueForMove<TKey, TValue>(this Dictionary<TKey, TValue> dict, TKey key)
        {
            return dict.ContainsKey(key) ? (TValue)dict[key] : default(TValue);
        }
    }
}
